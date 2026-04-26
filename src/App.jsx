import './App.css';

function App() {
  const signal = "SSSTTT.. PLEASE DON'T SHARE MY ID";

  return (
    <main className="app-container">
      <section className="hero-box" aria-label="Secret transmission">
        <p className="signal-line">encrypted signal // private channel</p>

        <h1 className="hero-text">
          <span className="glitch-wrapper">
            <span className="glitch-text" data-text={signal}>
              {signal}
            </span>
          </span>
        </h1>

        <p className="hero-subtext">Keep it in the dark.</p>
      </section>
    </main>
  );
}

export default App;
