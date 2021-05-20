import logo from "./logo.svg";
import "./App.css";

function App() {
  const hola = <h2>Hola mundo React</h2>;
  const saluda = (persona) => <h3>Hola {persona}</h3>;
  return (
    <div className="App">
      <header className="App-header">
        {hola}
        {saluda("Paco")}
        {2 + 2}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
