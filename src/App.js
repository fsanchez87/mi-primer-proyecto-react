import "./App.css";
import React from "react";
import Person from "./components/Person"

/**
 * KATA I: Componentes en React
 *
 * Creemos un componente Person que acepte props name, surname y age, y nos muestre dichos datos dentro
 * De etiquetas span.
 */

function App() {
  const hola = <h2>Hola mundo React</h2>;
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Paco" surname="Sánchez" age={33}></Person>
        <Person name="Jose" surname="Sánchez" age={23}></Person>
        <Person name="Francisco" surname="Sánchez" age={43}></Person>
      </header>
    </div>
  );
}

export default App;
