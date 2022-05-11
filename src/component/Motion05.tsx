import styled from "styled-components";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Motion05() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(x, [-800, 800], ["linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))", "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))"]);
  const { scrollY, scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  // no re render on useMotionValue change
  console.log("init", x);

  useEffect(() => {
    x.onChange(() => {
      console.log("x.onChange", x);
    });

    scrollY.onChange(() => {
      console.log("scrollY.onChange", scrollY.get(), scrollYProgress.get());
    });
  }, [scrollY, scrollYProgress]);

  return (
    <Box style={{ x, rotateZ, scale, background: gradient }} drag="x" dragSnapToOrigin>
      <button onClick={() => x.set(x.get() + 50)}>move to 50</button>
    </Box>
  );
}

export default Motion05;
