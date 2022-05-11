import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Motion05() {
  const x = useMotionValue(0);

  // no re render on useMotionValue change
  console.log("init", x);

  useEffect(() => {
    x.onChange(() => {
      console.log("x.onChange", x);
    });
  }, [x]);

  return (
    <>
      <button onClick={() => x.set(200)}>click</button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </>
  );
}

export default Motion05;
