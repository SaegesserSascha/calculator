import "./App.css";
import React, { useState, useEffect } from "react";
import Expression from "./components/expression/Expression";
import Display from "./components/display/Display";
import NumericKeypad from "./components/numeric-keypad/NumericKeypad";

function App() {
  const [expression, setExpression] = useState("");
  const [number, setNumber] = useState(0);
  const [isPositive, setIsPositive] = useState(true);
  const [isDecimal, setIsDecimal] = useState(false);

  /**
   * Adds a digit to the state of the current number.
   * 
   * @param {*} value The value of the digit.
   */
  function addDigit(value) {
    if (value >= 0 && value <= 9)
      if (number === 0 && value === 0) { // Prevents integers in the pattern of 0 -> 00 -> 000 ...
        return;
      } else if (number === 0 && value > 0) {
        setNumber(value);
      } else {
        setNumber(prev => `${prev}${value}`);
      }
  }

  /**
   * Negates the state of current number.
   */
  function negateNumber() {
    setIsPositive(!isPositive);
  }

  /**
   * Negates the current number while maintaining its format.
   */
  useEffect(() => {
    let decimals = 0;
    if (isDecimal) {
      try {
        decimals = number.toString().split(".")[1].length;
      } catch (err) {
        console.error(err);
      }
      if (decimals === 0) {
        // Keep trailing decimal separator after negating the number
        setNumber(prev => prev * -1 + ".");
        return;
      }
      // Keep trailing zeros in negative numbers after negating the number
      setNumber(prev => (prev * -1).toFixed(decimals));
      return;
    }
    setNumber(prev => prev * -1);
  }, [isPositive]);

  function addDecimalSeparator() {
    if (isDecimal) {
      return;
    }
    setIsDecimal(true);
    setNumber(prev => `${prev}.`);
  }

  function addBasicOperator(operator) {
    if (number) {
      var str = number;
      var op = "";
      if (number.toString().endsWith(".")) {
        str = number.toString().slice(0, -1);
        setNumber(parseInt(str));
      }
      switch (operator) {
        case "+":
          op = "+";
          break;
        case "-":
          op = "-";
          break;
        case "*":
          op = "*";
          break;
        case "/":
          op = "/";
          break;
        default:
          console.warn("Invalid operator");
          break;
      }
      setExpression(prev => `${prev}${str} ${op} `);
      clearNumber();
    }
  }

  function clearNumber() {
    setNumber(0);
    setIsPositive(true);
    setIsDecimal(false);
  }

  function clearTrailingDigit() {
    if (number.toString().length > 0) {
      if (number.toString().endsWith(".")) {
        setIsDecimal(false);
      }
      const str = number.toString().slice(0, -1);
      let num = parseInt(str);
      if (Number.isNaN(num)) {
        num = 0;
      }
      setNumber(num);
    }
  }

  function solveExpression() {
    if (expression.length > 0) {
      var arr = parseExpressionToArray();
      while (arr.length > 1) {
        arr = solveNextStep(arr);
      }
      setExpression(arr[0]);
    }
  }

  function solveNextStep(arr) {
    return []; // TODO Solve the next step based on the order of operations.
  }

  function parseExpressionToArray() {
    let equation = expression + number;
    setExpression(equation);
    let equationArr = equation.split(" ");
    return equationArr;
  }

  return (
    <div className="calculator">
      <Expression expression={expression} />
      <Display number={number} />
      <NumericKeypad
        negateNumber={negateNumber}
        addDigit={addDigit}
        addDecimalSeparator={addDecimalSeparator}
        addBasicOperator={addBasicOperator}
        clearTrailingDigit={clearTrailingDigit}
        solveExpression={solveExpression}
      />
    </div>
  );
}

export default App;