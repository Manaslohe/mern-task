import React, { Component } from "react";

class Child extends Component {
  handlesubmit = (event) => {
    this.props.parent(event.target.name.value);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Hi I am Child component</h1>
        <form onSubmit={this.handlesubmit}>
          <label for="name">Name</label>
          <input type="text" placeholder="enter your name" name="name" />
          <input type="submit" value={"submit"} />
        </form>
      </div>
    );
  }
}

export default Child;
