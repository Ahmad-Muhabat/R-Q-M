import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({ text: '', author: '' });

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author,
        });
      });
  };

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quoteInfo.text}</p>
        <p id="author">{quoteInfo.author}</p>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a 
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteInfo.text + " - " + quoteInfo.author)}`} 
          id="tweet-quote" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Post to Twitter
        </a>
      </div>
    </div>
  );
}

export default App;
