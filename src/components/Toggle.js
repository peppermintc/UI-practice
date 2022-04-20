import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  margin: 0 auto;
  padding: 2px;
  background-color: #ebebeb;
  border-radius: 24px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 1;
  color: ${({ isSelected }) => (isSelected ? "black" : "gray")};
`;

const ToggleBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: white;
  border: 3px solid #ebebeb;
  border-radius: 24px;
  transition: 0.3s;
  transform: ${({ mode }) => {
    if (mode === "기본") return "translateX(0)";
    if (mode === "상세") return "translateX(100%)";
  }};
`;

const Toggle = () => {
  const [mode, setMode] = useState("기본");

  const onButtonClick = (newMode) => {
    setMode(newMode);
  };

  return (
    <Container>
      <Button
        isSelected={mode === "기본"}
        onClick={() => onButtonClick("기본")}
      >
        기본
      </Button>
      <Button
        isSelected={mode === "상세"}
        onClick={() => onButtonClick("상세")}
      >
        상세
      </Button>
      <ToggleBox mode={mode} />
    </Container>
  );
};

export default Toggle;
