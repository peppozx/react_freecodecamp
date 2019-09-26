import React from "react";

class Results extends React.Component {
  resultsStyle = {
    fontSize: "1.2rem",
    fontStyle: "italic",
    fontWeight: "700"
  };

  colors = () => {
    return {
      color: this.props.switch ? "red" : "blue"
    };
  };
  colors2 = () => {
    return {
      color: this.props.switch ? "green" : "yellow"
    };
  };
  render() {
    return (
      <div className="results" style={this.resultsStyle}>
        <p style={this.colors()}>Results</p>
        <p style={this.colors2()}>Cep: {this.props.cep}</p>
        <p style={this.colors()}>Logradouro: {this.props.data.logradouro}</p>
        <p style={this.colors2()}>Complemento: {this.props.data.complemento}</p>
        <p style={this.colors()}>Localidade: {this.props.data.localidade}</p>
        <p style={this.colors2()}>UF: {this.props.data.uf}</p>
        <p style={this.colors()}>IBGE: {this.props.data.ibge}</p>
      </div>
    );
  }
}

export default Results;
