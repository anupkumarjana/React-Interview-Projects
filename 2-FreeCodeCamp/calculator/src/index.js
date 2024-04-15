import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState("0");
  const [lastClicked, setLastClicked] = useState(null);

  const handleNumberClick = (num) => {
    if (
      lastClicked === "operator" ||
      lastClicked === "equals" ||
      input === "Error"
    ) {
      setInput(num);
    } else {
      setInput(input + num);
    }
    setDisplay((prev) =>
      prev === "0" ||
      lastClicked === "operator" ||
      lastClicked === "equals" ||
      input === "Error"
        ? num
        : prev + num
    );
    setLastClicked("number");
  };

  const handleOperatorClick = (operator) => {
    if (lastClicked !== "operator") {
      setInput(
        (prev) => (prev.endsWith(".") ? prev.slice(0, -1) : prev) + operator
      );
      setDisplay(
        (prev) => (prev.endsWith(".") ? prev.slice(0, -1) : prev) + operator
      );
      setLastClicked("operator");
    }
  };

  const handleDecimalClick = () => {
    if (
      !input.includes(".") &&
      lastClicked !== "operator" &&
      lastClicked !== "decimal" &&
      lastClicked !== "equals" &&
      input !== "Error"
    ) {
      setInput(input + ".");
      setDisplay(display + ".");
      setLastClicked("decimal");
    }
  };

  const handleClearClick = () => {
    setInput("");
    setDisplay("0");
    setLastClicked(null);
  };

  const handleEqualsClick = () => {
    try {
      const result = evaluateExpression(input);
      setInput(result.toString());
      setDisplay(result.toString());
      setLastClicked("equals");
    } catch (error) {
      setInput("Error");
      setLastClicked("error");
    }
  };

 const evaluateExpression = (expression) => {
   const operators = [];
   const operands = [];

   const tokens = expression.match(/\d+\.\d+|\d+|\+|-|\*|\//g);

   tokens.forEach((token) => {
     if (/\d+(\.\d+)?/.test(token)) {
       operands.push(parseFloat(token));
     } else {
       while (
         operators.length &&
         getPrecedence(operators[operators.length - 1]) >= getPrecedence(token)
       ) {
         applyOperator(operators.pop(), operands);
       }
       operators.push(token);
     }
   });

   while (operators.length) {
     applyOperator(operators.pop(), operands);
   }

   return operands[0];
 };

  const applyOperator = (operator, operands) => {
    const b = operands.pop();
    const a = operands.pop();

    switch (operator) {
      case "+":
        operands.push(a + b);
        break;
      case "-":
        operands.push(Math.round(a - b)); // Round to the nearest integer for subtraction
        break;
      case "*":
        operands.push(a * b);
        break;
      case "/":
        if (b === 0) {
          throw new Error("Division by zero");
        }
        operands.push(a / b);
        break;
      default:
        throw new Error("Invalid operator");
    }
  };

  const getPrecedence = (operator) => {
    switch (operator) {
      case "+":
      case "-":
        return 1;
      case "*":
      case "/":
        return 2;
      default:
        return 0;
    }
  };

  return (
    <div id="calculator">
      <div id="display">{display}</div>
      <button id="clear" onClick={handleClearClick}>
        AC
      </button>
      <button id="divide" onClick={() => handleOperatorClick("/")}>
        /
      </button>
      <button id="multiply" onClick={() => handleOperatorClick("*")}>
        *
      </button>
      <button id="seven" onClick={() => handleNumberClick("7")}>
        7
      </button>
      <button id="eight" onClick={() => handleNumberClick("8")}>
        8
      </button>
      <button id="nine" onClick={() => handleNumberClick("9")}>
        9
      </button>
      <button id="subtract" onClick={() => handleOperatorClick("-")}>
        -
      </button>
      <button id="four" onClick={() => handleNumberClick("4")}>
        4
      </button>
      <button id="five" onClick={() => handleNumberClick("5")}>
        5
      </button>
      <button id="six" onClick={() => handleNumberClick("6")}>
        6
      </button>
      <button id="add" onClick={() => handleOperatorClick("+")}>
        +
      </button>
      <button id="one" onClick={() => handleNumberClick("1")}>
        1
      </button>
      <button id="two" onClick={() => handleNumberClick("2")}>
        2
      </button>
      <button id="three" onClick={() => handleNumberClick("3")}>
        3
      </button>
      <button id="equals" onClick={handleEqualsClick}>
        =
      </button>
      <button id="zero" onClick={() => handleNumberClick("0")}>
        0
      </button>
      <button id="decimal" onClick={handleDecimalClick}>
        .
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
