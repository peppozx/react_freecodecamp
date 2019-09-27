import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormContainer from "./FormContainer";

export class About extends Component {
  render() {
    return (
      <div className="about">
        <p>About page motherfucker</p>
        <Link to="/">Home</Link>
        <FormContainer />
      </div>
    );
  }
}

export default About;
