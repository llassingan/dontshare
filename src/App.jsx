import './App.css';

function App() {
  const text = "SSSTTT.. PLEASE DON'T SHARE MY ID";

  return (
    <div className="app-container">
      <div className="hero-box">
        <h1 className="hero-text">
          <span className="glitch-wrapper">
            <span className="glitch-text" data-text={text}>
              {text}
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}

export default App;
