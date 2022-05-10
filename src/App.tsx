import { useState } from "react";
import styled from "styled-components";

import Motion00 from "./component/Motion00";
import Motion01 from "./component/Motion01_variants";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
`;

function App() {
  const [number, setNumber] = useState(0);
  const motions = [Motion00, Motion01];

  return (
    <>
      <Nav>
        {motions.map((motion, index) => (
          <button key={index} onClick={() => setNumber(index)}>
            {index}
          </button>
        ))}
      </Nav>
      {motions.map((motion, index) => {
        return index === number && <Wrapper key={index}>{motions[index]()}</Wrapper>;
      })}
    </>
  );
}

export default App;
