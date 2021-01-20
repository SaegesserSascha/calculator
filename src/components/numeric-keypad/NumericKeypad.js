import "./style.css";
import React from "react";

/**
 * Provides a numeric keypad with the numbers [0-9],
 * a decimal separator
 * and the ability to negate the current number.  
 */
function NumericKeypad({ negateNumber, addDigit, addDecimalSeparator, addBasicOperator, solveExpression, clearTrailingDigit }) {
  return (
    <div className="keypad">
      <button className="tile digit row-4" onClick={() => negateNumber()}>±</button>
      <button className="tile digit row-4" onClick={() => addDigit(0)}>0</button>
      <button className="tile digit row-4" onClick={() => addDecimalSeparator()}>.</button>
      <button className="tile operator row-4" onClick={() => addBasicOperator("+")}>+</button>
      <button className="tile equals row-4" onClick={() => solveExpression()}>=</button>
      <button className="tile digit row-3" onClick={() => addDigit(1)}>1</button>
      <button className="tile digit row-3" onClick={() => addDigit(2)}>2</button>
      <button className="tile digit row-3" onClick={() => addDigit(3)}>3</button>
      <button className="tile operator row-3" onClick={() => addBasicOperator("-")}>-</button>
      <div className="tile noHover row-3"></div>
      <button className="tile digit row-2" onClick={() => addDigit(4)}>4</button>
      <button className="tile digit row-2" onClick={() => addDigit(5)}>5</button>
      <button className="tile digit row-2" onClick={() => addDigit(6)}>6</button>
      <button className="tile operator row-2" onClick={() => addBasicOperator("*")}>×</button>
      <div className="tile noHover row-2"></div>
      <button className="tile digit row-1" onClick={() => addDigit(7)}>7</button>
      <button className="tile digit row-1" onClick={() => addDigit(8)}>8</button>
      <button className="tile digit row-1" onClick={() => addDigit(9)}>9</button>
      <button className="tile operator row-1" onClick={() => addBasicOperator("/")}>÷</button>
      <button className="tile backspace row-1" onClick={() => clearTrailingDigit("/")}>⌫</button>
    </div>
  );
}

export default NumericKeypad;