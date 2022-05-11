import { useState } from "react";
import styled from "styled-components";

import Motion00 from "./component/Motion00";
import Motion01 from "./component/Motion01_variants";
import Motion02 from "./component/Motion02";
import Motion03 from "./component/Motion03";
import Motion04 from "./component/Motion04";
import Motion05 from "./component/Motion05";

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
  background: rgba(0, 0, 0, 0.5);
  button {
    color: #fff;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

function App() {
  const [number, setNumber] = useState(0);
  const motions = [
    { name: "Basic", component: Motion00 },
    { name: "Animation", component: Motion01 },
    { name: "Variants", component: Motion02 },
    { name: "Gestures", component: Motion03 },
    { name: "Drag", component: Motion04 },
    { name: "MotionValue", component: Motion05 },
  ];

  return (
    <>
      <Nav>
        {motions.map((motion, index) => (
          <button key={index} onClick={() => setNumber(index)}>
            {index === number && <span>✔</span>}
            {motions[index].name}
          </button>
        ))}
      </Nav>
      {motions.map((motion, index) => {
        const Component = motions[index].component;
        return (
          index === number && (
            <Wrapper key={index}>
              <Component />
            </Wrapper>
          )
        );
      })}
    </>
  );
}

export default App;
