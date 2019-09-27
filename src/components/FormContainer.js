import React, { Component } from "react";
import FormComponent from "./FormComponent";

export class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
      phone: "",
      checked: false
    };
  }
  handleChange = e => {
    e.target.name === "checked"
      ? this.setState({
          ...this.state,
          checked: !this.state.checked
        })
      : this.setState({
          [e.target.name]: e.target.value
        });
  };
  render() {
    return (
      <div>
        <FormComponent data={this.state} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default FormContainer;
