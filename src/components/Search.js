import React from "react";
import axios from "axios";

import Results from "./Results";

class Search extends React.Component {
  state = {
    cep: "",
    data: {},
    switch: false
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        ...this.state,
        switch: !this.state.switch
      });
    }, 300);
  }
  submitForm = e => {
    e.preventDefault();
    axios
      .get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then(res => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .then(data => {
        this.setState({
          ...this.state,
          data: data
        });
      });
  };
  onChange = e => {
    this.setState({
      cep: e.target.value
    });
  };
  cepColor = () => {
    return {
      color: this.state.switch ? "blue" : "red"
    };
  };
  switchColor = e => {
    this.setState({
      ...this.state,
      switch: !this.state.switch
    });
    console.log(this.state.switch);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitForm} className="my-form">
          <p onClick={this.switchColor} style={this.cepColor()}>
            CEP:
          </p>
          <input type="text" required onChange={this.onChange} />
          <p>{this.state.cep}</p>
          <input type="submit" value="Submit" />
        </form>
        <Results
          data={this.state.data}
          cep={this.state.cep}
          switch={this.state.switch}
        />
      </div>
    );
  }
}

export default Search;
