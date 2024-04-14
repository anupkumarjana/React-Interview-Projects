import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import q from "./assets/Heater1.mp3";
import w from "./assets/Heater2.mp3";
import e from "./assets/Heater3.mp3";
import a from "./assets/Heater4.mp3";
import s from "./assets/Heater5.mp3";
import d from "./assets/Heater6.mp3";
import z from "./assets/Heater7.mp3";
import x from "./assets/Heater8.mp3";
import c from "./assets/Heater9.mp3";

// const sounds=[
//   {id=}
// ]

function App() {
  const [displayText, setDisplayText] = useState(
    "Press a key or click a drum-pad"
  );
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      const audioElement = document.getElementById(key);

      if (audioElement) {
        setDisplayText(`key ${key} pressed`);
        audioElement.play();
      }
    };

    const handleClick = (event) => {
      const key = event.target.id.toUpperCase();
      const audioElement = document.getElementById(key);

      if (audioElement) {
        setDisplayText(`Drum-pad ${key} clicked`);
        audioElement.play();
      }
    };

    // Add event listeners
    document.addEventListener("keydown", handleKeyPress);
    document.querySelectorAll(".drum-pad").forEach((pad) => {
      pad.addEventListener("click", handleClick);
    });

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.querySelectorAll(".drum-pad").forEach((pad) => {
        pad.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div id="container">
      <div id="drum-machine">
        <div id="display">{displayText}</div>
        <div className="drum-pad" id="q">
          Q <audio src={q} className="clip" id="Q"></audio>
        </div>
        <div className="drum-pad" id="w">
          W <audio src={w} className="clip" id="W"></audio>
        </div>
        <div className="drum-pad" id="e">
          E <audio src={e} className="clip" id="E"></audio>
        </div>
        <div className="drum-pad" id="a">
          A <audio src={a} className="clip" id="A"></audio>
        </div>
        <div className="drum-pad" id="s">
          S <audio src={s} className="clip" id="S"></audio>
        </div>
        <div className="drum-pad" id="d">
          D <audio src={d} className="clip" id="D"></audio>
        </div>
        <div className="drum-pad" id="z">
          Z <audio src={z} className="clip" id="Z"></audio>
        </div>
        <div className="drum-pad" id="x">
          X <audio src={x} className="clip" id="X"></audio>
        </div>
        <div className="drum-pad" id="c">
          C <audio src={c} className="clip" id="C"></audio>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
