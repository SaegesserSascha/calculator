import "./App.css";
import React, { useState, useEffect } from "react";
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
    switch (true) {
      case value === ".":
        if (!isDecimal) {
          setIsDecimal(true);
          setNumber(prev => `${prev}${value}`);
        }
        break;
      case value >= 0 && value <= 9:
        if (number === 0 && value === 0) { // Prevents integers in the pattern of 0 -> 00 -> 000 ...
          break;
        } else if (number === 0 && value > 0) {
          setNumber(value);
        } else {
          setNumber(prev => `${prev}${value}`);
        }
        break;
      default:
        console.warn("Tried to add an invalid value.");
        break;
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

  return (
    <>
      <p>{number}</p>
      <NumericKeypad negateNumber={negateNumber} addDigit={addDigit} />
    </>
  );
}

export default App;