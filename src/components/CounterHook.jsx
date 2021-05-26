/**
   Crear un componente counter
    Crea un componente counter que contenga:
    ●    botón de decremento
    ●    contador
    ●    botón de incremento
    
    El componente mostrará un contador y podremos incrementarlo o decrementarlo en función
    de si pulsamos un botón y otro
    Que al instanciarlo pueda:
    ●    Que el contador pueda empezar desde un determinado número
    ●    Que podamos decirle al componente si queremos que incremente de 2 en 2, 3 en 3, etc.
 */

import React, { Component, useState } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: this.props.initialValue,
//     };
//   }

//   increment = () => {
//     this.setState({ counter: this.state.counter + this.props.step });
//   };
//   decrement = () => {
//     if (this.state.counter > 0) {
//       this.setState({ counter: this.state.counter - this.props.step });
//     }
//   };

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.increment}>+</button>
//         <span> {this.state.counter} </span>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     );
//   }
// }

const Counter = (props) => {
  const [counter, setCounter] = useState(props.initialValue);
  const increment = () => {
    setCounter(counter + props.step);
  };
  const decrement = () => {
    if (counter > 0) {
        setCounter(counter - props.step);
    }
  };
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <span> {counter} </span>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
