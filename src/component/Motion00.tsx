import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Motion00() {
  return <Box transition={{ duration: 0.5 }} animate={{ borderRadius: "100px" }} />;
}

export default Motion00;
