import React from "react";
import styled from "styled-components";

export enum ButtonType{
    Number, 
    Operation
}

type ButtonProps = {
  height?: number;
  label: string;
  position?: [x: number, y: number];
  type?: ButtonType;
  width?: number;
};

const StyledButton = styled.div`
  background: #DE6E4B;
  color: #323333;
  border-radius: 8px;
  font-size: 24px;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const Button: React.FC<ButtonProps> = ({ type = ButtonType.Operation, label, position, width, height }) => {
  const styles: React.CSSProperties = {};
  if (position) {
    styles.gridColumnStart = position[0];
    styles.gridRowStart = position[1];
  }
  if (width) {
    styles.gridColumnEnd = `span ${width}`;
  }
  if (height) {
    styles.gridRowEnd = `span ${height}`;
  }

  if(type === ButtonType.Number){
      styles.color = '#fff';
      styles.background = '#658E9C';

  }

  return <StyledButton style={styles}>{label}</StyledButton>;
};

export default Button;

