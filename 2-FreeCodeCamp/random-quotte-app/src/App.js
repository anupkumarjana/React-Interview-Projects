import { useState } from "react";
import { quoteData } from "./data";
import { useEffect } from "react";

function App() {
  const [currentQuoteIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    setCurrentIndex(Math.floor(Math.random() * quoteData.length));
  };

  const currentQuote = quoteData[currentQuoteIndex];

  return (
    <div className="App">
      <div id="quote-box" key={currentQuote.id}>
        {/* <span>{currentQuote.id}</span> */}
        <div id="text">"{currentQuote.text}</div>
        <div id="author">-{currentQuote.author}</div>
        <div id="buttons">
          <a
            rel="noreferrer"
            href="https://twitter.com/intent/tweet"
            target="_blank"
            id="twitter-quote"
          >
            Twitter
          </a>
          <button id="new-quote" onClick={getQuote}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
