import React, { useState } from "react";

function App() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState("");

  const display = (symbol) => {
    setExpression((prevValue) => {
      if (
        /[+*-/]/.test(symbol) &&
        /[+*-/]/.test(prevValue[prevValue.length - 1])
      ) {
        if (/[-]/.test(symbol)) {
          return prevValue + symbol;
        } else {
          let count = 0;
          for (let i = 0; i < prevValue.length; i++) {
            if (isNaN(+prevValue[i])) {
              count++;
            } else {
              count = 0;
            }
          }
          return prevValue.slice(0, prevValue.length - count) + symbol;
        }
      } else {
        if (prevValue) {
          prevValue = prevValue + "";
          let valArr = prevValue.split(/[+/*-]/g);
          let lastNumber = valArr[valArr.length - 1];
          if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === ".") {
            symbol = "";
          }
        }

        return (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".");
      }
    });

    setAnswer((prevValue) =>
      (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
    );
  };

  const calculate = () => {
    try {
      setAnswer(String(eval(expression)));
      setExpression(String(eval(expression)));
    } catch (error) {
      setAnswer("Error");
      setExpression("");
    }
  };

  const allClear = () => {
    setExpression("");
    setAnswer("");
  };

  const clear = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="display">
          <input
            className="expression"
            disabled
            placeholder="0"
            value={expression}
          />
          <input
            id="display"
            className="answer"
            disabled
            value={answer}
          />
        </div>
        <div onClick={allClear} className="padButton clear red" id="clear">
          AC
        </div>
        <div onClick={clear} className="padButton c red" id="c">
          C
        </div>
        <div onClick={() => display("/")} className="padButton divide" id="divide">
          /
        </div>
        <div onClick={() => display("*")} className="padButton multiply" id="multiply">
          *
        </div>
        <div onClick={() => display("7")} className="padButton seven dark-grey" id="seven">
          7
        </div>
        <div onClick={() => display("8")} className="padButton eight dark-grey" id="eight">
          8
        </div>
        <div onClick={() => display("9")} className="padButton nine dark-grey" id="nine">
          9
        </div>
        <div onClick={() => display("-")} className="padButton subtract" id="subtract">
          -
        </div>
        <div onClick={() => display("4")} className="padButton four dark-grey" id="four">
          4
        </div>
        <div onClick={() => display("5")} className="padButton five dark-grey" id="five">
          5
        </div>
        <div onClick={() => display("6")} className="padButton six dark-grey" id="six">
          6
        </div>
        <div onClick={() => display("+")} className="padButton add" id="add">
          +
        </div>
        <div onClick={calculate} className="padButton equals" id="equals">
          =
        </div>
        <div onClick={() => display("0")} className="padButton zero dark-grey" id="zero">
          0
        </div>
        <div onClick={() => display(".")} className="padButton decimal dark-grey" id="decimal">
          .
        </div>
      </div>
    </div>
  );
}

export default App;
