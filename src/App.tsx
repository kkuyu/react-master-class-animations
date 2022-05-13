import { useState } from "react";
import styled from "styled-components";

import Motion00 from "./component/Motion00";
import Motion01 from "./component/Motion01_variants";
import Motion02 from "./component/Motion02";
import Motion03 from "./component/Motion03";
import Motion04 from "./component/Motion04";
import Motion05 from "./component/Motion05";
import Motion06 from "./component/Motion06";
import Motion07 from "./component/Motion07";
import Motion08 from "./component/Motion08";
import Motion09 from "./component/Motion09";
import Motion10 from "./component/Motion10";

const Wrapper = styled.div<{ wrapperStyle?: { [key: string]: any } }>`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.wrapperStyle}
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
    { name: "MotionValue", component: Motion05, wrapperStyle: { height: "200vh" } },
    { name: "Path", component: Motion06 },
    { name: "Animations", component: Motion07 },
    { name: "Slider", component: Motion08 },
    { name: "Move", component: Motion09, wrapperStyle: { justifyContent: "space-around" } },
    { name: "List", component: Motion10 },
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
        const Component = motion.component;
        return (
          index === number && (
            <Wrapper key={index} wrapperStyle={motion.wrapperStyle}>
              <Component />
            </Wrapper>
          )
        );
      })}
    </>
  );
}

export default App;
