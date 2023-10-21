// install es7 react snippets extension

//rce - class
//rfce - function component
import React, { Component } from "react";

class State extends Component {
  // class component would capture the props given by parent component in the constructor
  constructor() {
    // Father
    super();

    this.state = {
      // Julia
      name: "Richie",
      age: 25,
      profession: "Trainer",
    };

    this.changeState = this.changeState.bind(this);
    // binding the function with the current object
    // this.funcName = this.funcName.bind(this)
  }
  changeState() {
    // Richie
    this.setState({
      // current values in the state will change
      name: "Rahul",
      age: 28,
      profession: "Manager",
    });
  }
  render() {
    return (
      <div>
        <h1>
          Hi my name is {this.state.name} my age is {this.state.age} and I work
          as a {this.state.profession}
        </h1>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}

export default State;
