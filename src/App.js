import "./App.css";
import React from "react";
import Counter from "./components/Counter.jsx";
import Estado from "./components/Estado.jsx";
import Efecto from "./components/Efecto";
/**
 * KATA I: Componentes en React
 *
 * Creemos un componente Person que acepte props name, surname y age, y nos muestre dichos datos dentro
 * De etiquetas span.
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialValue={5} step={5} />
        <Counter initialValue={10} step={2} />
        <Estado />
        <Efecto />
      </header>
    </div>
  );
}

export default App;
