import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoList, setRedoList] = useState([]);
  const [undoCount, setUndoCount] = useState(0);

  const maintainHistory = (btn, prevValue, currValue) => {
    // console.log("btn : ",btn,"  prevValue : ",prevValue,"  currValue : ",currValue);
    const historyObject = { action: btn, prevValue, currValue };
    const copyHistory = [...history]; // we're making copy of history array so that we don't have to manipulate original array
    copyHistory.unshift(historyObject); // we're unshift() because, we have to show the latest operation on the top // if we did push then latest operation will show on the top
    setHistory(copyHistory);
  };

  // // if we click +1, -100, +10 respective. Then the array looks like history = [+10, -100,+1] , so its added in the front
  // // if we want to undo, the we should undo by the 1st element of the array. beacuse its the latest button clicked

  const handleUndo = () => {
    if (history.length > 0) {
      if (undoCount + 1 > 5) {
        alert("You can't undo more than 5 times");
        return;
      }
      const copyHistory = [...history];
      const firstItem = copyHistory.shift();
      setHistory(copyHistory);

      setValue(firstItem.prevValue);

      const copyRedoList = [...redoList];
      copyRedoList.push(firstItem);
      setRedoList(copyRedoList);
    }
  };

  const handleRedo = () => {
    if (redoList.length > 0) {
      const copyRedoList = [...redoList];
      const poppedValue = copyRedoList.pop();
      const { action, prevValue, currValue } = poppedValue;
      setValue(currValue);
      maintainHistory(action, prevValue, currValue);
    }
  };

  const handleClick = (btn) => {
    console.log(btn);
    maintainHistory(btn, value, btn + value);
    setValue(btn + value);
  };

  return (
    <div className="flex justify-center items-center w-full flex-col gap-10 mt-20">
      <h1 className="text-xl font-bold">Undoable Counter</h1>
      <div className="flex gap-40">
        <button
          className="border rounded-md px-4 py-2 bg-purple-600 text-white"
          onClick={handleUndo}
        >
          Undo
        </button>
        <button
          className="border rounded-md px-4 py-2 bg-purple-600 text-white"
          onClick={handleRedo}
        >
          Redo
        </button>
      </div>
      <div className="flex gap-10 justify-center items-center">
        <div className="flex gap-10">
          {[-100, -10, -1].map((btn, index) => (
            <button
              key={index}
              className="border rounded-md px-4 py-2 bg-purple-600 text-white"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
        <span className="border rounded-md bg-yellow-400 w-60 text-center p-4 text-lg">
          {value}
        </span>
        <div className="flex gap-10">
          {[+100, +10, +1].map((btn, index) => (
            <button
              key={index}
              className="border rounded-md px-4 py-2 bg-purple-600 text-white"
              onClick={() => handleClick(btn)}
            >
              {"+" + btn}
            </button>
          ))}
        </div>
      </div>
      <div className="w-80 border rounded-e-md flex flex-col gap-4 h-96 p-10">
        <span className="text-center">History</span>
        <div>
          {history.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border p-2 rounded-md mb-2"
            >
              <span>{item.action} </span>
              <span>
                {item.prevValue}-{`>`}
                {item.currValue}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
