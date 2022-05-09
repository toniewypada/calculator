import React from "react";
import styled from "styled-components";

type ButtonProps = {
    label: string;
}

const StyledButton = styled.div`
  background: white;
`;

const Button: React.FC<ButtonProps> = ({label}) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
