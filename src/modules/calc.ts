export enum InputType {
  Numerical,
  Operational,
}

export enum OperationType {
  Add,
  Subtract,
  Equals,
}

export type CalcInput =
  | {
      type: InputType.Numerical;
      value: number;
    }
  | { type: InputType.Operational; operation: OperationType };

export type CalcState = {
    displayValue: number;
}

  const getState = (inputs: Array<CalcInput>): CalcState => {
      return { displayValue: 15 }
  };

const Calc = {
  getState,
};

export default Calc;
