import React, { ElementType } from "react";
import styled from "styled-components";

export enum ButtonType{
    Number, 
    Operation
}

type ButtonProps = React.HTMLProps<HTMLDivElement> &  {
  height?: number;
  label: string;
  position?: [x: number, y: number];
  buttonType?: ButtonType;
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

const Button: React.FC<ButtonProps> = ({ buttonType = ButtonType.Operation, label, position, width, height, onClick }) => {
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

  if(buttonType === ButtonType.Number){
      styles.color = '#fff';
      styles.background = '#658E9C';

  }

  return <StyledButton onClick={onClick} style={styles}>{label}</StyledButton>;
};

export default Button;

