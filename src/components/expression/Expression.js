import "./style.css";
import React from "react";

function Expression({expression}) {
  return (
    <div className="container">
      {expression}
    </div>
  );
}

export default Expression;