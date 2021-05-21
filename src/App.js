import logo from "./logo.svg";
import "./App.css";
import React from "react";

//Componente simple
const saludaSimple = (persona) => <h3>Hola {persona}</h3>;

// Componente como función
const SaludaFuncion = (props) => {
  console.log(props);
  return <h3>Hola2 {props.name}</h3>;
};

//Componente como clase
class SaludaClase extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return <h3>Hola3 {this.props.name}</h3>;
  }
}

function App() {
  const hola = <h2>Hola mundo React</h2>;
  return (
    <div className="App">
      <header className="App-header">
        {hola} {2 + 2}
        {saludaSimple("saludaSimple")}
        <SaludaFuncion
          name="SaludaFuncion"
          age={33}
          objeto={{ hobbies: ["codding"] }}
        />
        <SaludaClase
          name="SaludaClase"
          age={33}
          objeto={{ hobbies: ["codding"] }}
        />
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
