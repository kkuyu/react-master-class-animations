import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
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
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);

  // no re render on useMotionValue change
  console.log("init", x);

  useEffect(() => {
    x.onChange(() => {
      console.log("x.onChange", x);
    });
  }, [x]);

  return (
    <Box style={{ x, scale }} drag="x" dragSnapToOrigin>
      <button onClick={() => x.set(x.get() + 50)}>move to 50</button>
    </Box>
  );
}

export default Motion05;
