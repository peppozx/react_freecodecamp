import React from "react";
import MyHeader from "./Header";
import MyInfo from "./MyInfo";
import Search from "./Search";

class App extends React.Component {
  state = {
    switch: false
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        ...this.state,
        switch: !this.state.switch
      });
    }, 500);
  }
  getBackground = () => {
    return {
      backgroundColor: this.state.switch
        ? "#" + ((Math.random() * 0xffffff) << 0).toString(16)
        : "#" + ((Math.random() * 0xffffff) << 0).toString(16)
    };
  };
  render() {
    return (
      <div style={this.getBackground()}>
        <MyHeader />
        <MyInfo />
        <Search />
      </div>
    );
  }
}

export default App;
