import { useState } from "react";

const NumbersGrid = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "+", "-", "*", "."];

  const createNumbers = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return numbers;
  };

  const updateCalc = (value: string) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const deleteItem = () => {
    if (calc === "") {
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    setResult(eval(value).toString());
  };
  const resetCalculator = () => {
    setCalc("");
    setResult("");
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  return (
    <div className="App">
      <h2>Hello World!</h2>
      <div className="calculator">
        <div className="display">
          <span>{result ? "(" + result + ")" : ""}</span> {calc || 0}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={deleteItem}>Delete</button>
          <button onClick={resetCalculator}>Reset</button>
        </div>
        <div className="numbers">
          {createNumbers()}
          <button
            onClick={() => {
              updateCalc("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              updateCalc(".");
            }}
          >
            .
          </button>
        </div>

        <div>
          <button type="submit" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumbersGrid;
