import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};

function Motion07() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>{showing ? <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving" /> : null}</AnimatePresence>
    </>
  );
}

export default Motion07;
