import React from "react";
import "./UserForm.scss";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", genero: "" };
    this.emailInput = React.createRef();
  }
  componentDidMount(){
    console.log(this.emailInput.current);
    this.emailInput.current.focus();
  }
  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleSelectChange = (event) => {
    //console.log(event.target.selectedOptions[0].value)
    this.setState({ genero: event.target.selectedOptions[0].value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  };
  render() {
    return (
      <form className="userForm" onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          ref={this.emailInput}
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Introduce el email"
        />
        <select
          name="genero"
          value={this.state.genero}
          onChange={this.handleSelectChange}
        >
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default UserForm;
