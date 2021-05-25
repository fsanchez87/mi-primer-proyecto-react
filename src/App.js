import "./App.css";
import React from "react";
import Counter from "./components/Counter.jsx";
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
        <Counter initialValue={5}/>
        <Counter initialValue={4}/>
      </header>
    </div>
  );
}

export default App;
