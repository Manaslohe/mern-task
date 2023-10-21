import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();

    this.state = {
      name: "Raju",
    };
  }
  changeName = (childData) => {
    this.setState({ name: childData });
  };
  render() {
    return (
      <div>
        <h1>Hi I am Parent</h1>
        <h2>Hi I am {this.state.name}</h2>
        <Child parent={this.changeName} />
      </div>
    );
  }
}

export default Parent;
