import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MyHeader from "./Header";
import MyInfo from "./MyInfo";
import Search from "./Search";
import About from "./About";

class App extends React.Component {
  state = {
    switch: false
  };
  componentDidMount() {
    //GET the data i need to correctly display
    setInterval(() => {
      this.setState({
        ...this.state,
        switch: !this.state.switch
      });
    }, 500);
  }

  // static getDerivedStateFromProps(props, state) {
  //   //return the new, update state based upon props
  // }

  // getSnapshotBeforeUpdate() {
  //   // create a backup of the current way things are
  // }

  // componentWillReceiveProps(nextProps) {
  //   //Every time a component receive props or a father component change it's props
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   //return true if you want it to update
  //   //return false if you don't
  //   return true;
  // }

  // componentWillUnmount() {
  //   // remove (ex: event listeners setted in componentDidMount) - clean up things before your component disappears
  // }

  getBackground = () => {
    return {
      backgroundColor: this.state.switch
        ? "#" + ((Math.random() * 0xffffff) << 0).toString(16)
        : "#" + ((Math.random() * 0xffffff) << 0).toString(16)
    };
  };
  render() {
    return (
      <Router>
        <Route exact path="/">
          <React.Fragment>
            <div style={this.getBackground()}>
              <MyHeader />
              <MyInfo />
              <Search />
            </div>
          </React.Fragment>
        </Route>
        <Route path="/about">
          <React.Fragment>
            <About />
          </React.Fragment>
        </Route>
      </Router>
    );
  }
}

export default App;
