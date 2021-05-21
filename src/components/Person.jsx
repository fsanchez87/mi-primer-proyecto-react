import React from "react";

/**
 * KATA I: Componentes en React
 *
 * Creemos un componente Person que acepte props name, surname y age, y nos muestre dichos datos dentro
 * De etiquetas span.
 */

// const Person = (props) => {
//   return (
//     <div>
//       <span>Nombre: {props.name}, </span>
//       <span>Apellido: {props.surname}, </span>
//       <span>Edad: {props.age}</span>
//     </div>
//   );
// };
class Person extends React.Component {
  constructor(props) {
    super(props) // Para ejecutar el constructor del padre que es React.Component
  }
  render() {
    return (
      <div>
        <span>Nombre: {this.props.name}, </span>
        <span>Apellido: {this.props.surname}, </span>
        <span>Edad: {this.props.age}</span>
      </div>
    );
  }
}

export default Person;
