import "./style.css";
import React from "react";

/**
 * Provides a numeric keypad with the numbers [0-9],
 * a decimal separator
 * and the ability to negate the current number.  
 */
function NumericKeypad({ negateNumber, addDigit }) {
  return (
    <div className="keypad">
      <button className="digit row-4" onClick={() => negateNumber()}>±</button>
      <button className="digit row-4" onClick={() => addDigit(0)}>0</button>
      <button className="digit row-4" onClick={() => addDigit(".")}>.</button>
      <button className="digit row-3" onClick={() => addDigit(1)}>1</button>
      <button className="digit row-3" onClick={() => addDigit(2)}>2</button>
      <button className="digit row-3" onClick={() => addDigit(3)}>3</button>
      <button className="digit row-2" onClick={() => addDigit(4)}>4</button>
      <button className="digit row-2" onClick={() => addDigit(5)}>5</button>
      <button className="digit row-2" onClick={() => addDigit(6)}>6</button>
      <button className="digit row-1" onClick={() => addDigit(7)}>7</button>
      <button className="digit row-1" onClick={() => addDigit(8)}>8</button>
      <button className="digit row-1" onClick={() => addDigit(9)}>9</button>
    </div>
  );
}

export default NumericKeypad;