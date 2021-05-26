import "./App.css";
import React, { useState } from "react";
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
  const [showCounters, setShowCounters] = useState(true);
  const quitarCounters = () => setShowCounters(false);
  return (
    <div className="App">
      <header className="App-header">
        {showCounters && (
          <React.Fragment>
            <Counter initialValue={5} step={5} />
            <Counter initialValue={10} step={2} />
          </React.Fragment>
        )}
        <button onClick={quitarCounters}>Quitar Counters</button>

        <Estado />
        <Efecto />
      </header>
    </div>
  );
}

export default App;
