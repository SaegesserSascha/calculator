import "./style.css";
import React from "react";

function Result({result}) {
  return (
    <div className="result-container">
      <p>{result}</p>
    </div>
  )
}

export default Result;