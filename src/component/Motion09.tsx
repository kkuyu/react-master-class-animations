import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 50px;
  width: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Motion09() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <>
      <button onClick={toggleClicked}>click</button>
      <Box>{!clicked ? <Circle layoutId="circle" style={{ borderRadius: 50 }} /> : null}</Box>
      <Box>{clicked ? <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} /> : null}</Box>
    </>
  );
}

export default Motion09;
