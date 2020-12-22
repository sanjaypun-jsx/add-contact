import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  font-size: 1rem;
  height: 2rem;
  margin: 0rem 0.3rem;
  background: ${({ bgcolor }) => (bgcolor ? bgcolor : "danger")};
  color: white;
  outline: none;
  &:hover {
    background: ${({ bgcolor }) => (bgcolor ? "white" : null)};
  }
`;
const ButtonComponent = ({ onClick, bgcolor, type, children }) => {
  return (
    <StyledButton onClick={onClick} type={type} bgcolor={bgcolor}>
      {children}
    </StyledButton>
  );
};
export default ButtonComponent;
