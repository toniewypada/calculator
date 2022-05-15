import React, { useState } from "react";
import styled from "styled-components";
import { ButtonType } from "./Button";
import Button from "./Button";
import Calc, { CalcInput, InputType, OperatorType } from "../modules/calc";

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: 120px repeat(5, 80px);
  grid-gap: 10px;
`;

const Display = styled.div`
  background: #fff;
  border-radius: 8px;
  font-size: 49px;
  grid-column-end: span 4;
  text-align: right;
  padding: 24px;
  align-content: center;
`;

const Calculator: React.FC<{}> = () => {
  const [inputs, setInputs] = useState<Array<CalcInput>>([]);
  const state = Calc.getState(inputs);

  const appendImput = (input: CalcInput): void => {
    setInputs((prev) => [...prev, input]);
  };

  const handleNumerical = (value: number) => () => {
    appendImput({ type: InputType.Numerical, value });
  };

  const handleOperator = (operator: OperatorType) => () =>
    appendImput({ type: InputType.Operator, operator });

  const handleAllClear = () => setInputs([]);

  const handleBackButton = () => setInputs((prev) => prev.slice(0, -1));

  return (
    <Container>
      <Grid>
        <Display>{state.displayValue}</Display>
        <Button
          label="AC"
          position={[1, 2]}
          width={2}
          onClick={handleAllClear}
        />
        <Button
          label="Back!"
          position={[3, 2]}
          width={2}
          onClick={handleBackButton}
        />
        <Button
          label="+"
          position={[4, 3]}
          onClick={handleOperator(OperatorType.Add)}
        />
        <Button
          label="-"
          position={[4, 4]}
          onClick={handleOperator(OperatorType.Subtract)}
        />
        <Button
          label="="
          position={[4, 5]}
          height={2}
          onClick={handleOperator(OperatorType.Equals)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="9"
          position={[3, 3]}
          onClick={handleNumerical(9)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="8"
          position={[2, 3]}
          onClick={handleNumerical(8)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="7"
          position={[1, 3]}
          onClick={handleNumerical(7)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="6"
          position={[3, 4]}
          onClick={handleNumerical(6)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="5"
          position={[2, 4]}
          onClick={handleNumerical(5)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="4"
          position={[1, 4]}
          onClick={handleNumerical(4)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="3"
          position={[3, 5]}
          onClick={handleNumerical(3)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="2"
          position={[2, 5]}
          onClick={handleNumerical(2)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="1"
          position={[1, 5]}
          onClick={handleNumerical(1)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="0"
          position={[1, 6]}
          width={3}
        />
      </Grid>
    </Container>
  );
};

export default Calculator;
