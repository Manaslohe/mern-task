import React, { Component } from "react";

class ClassClick extends Component {
  change() {
    document.getElementById("i2").innerHTML = "Hi, I am Black Widow";
  }
  render() {
    return (
      <div>
        <h1 id="i2">Hello I am Wonder Woman</h1>
        <button onClick={this.change}>Change Message(Class)</button>
      </div>
    );
  }
}
export default ClassClick;
