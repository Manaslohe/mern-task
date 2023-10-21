// fetch() -> capture data
// axios -> 3rd party api to make http request
// http - hyper text transfer protocol
import React, { Component } from "react";
import axios from "axios";
class DataFetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Data fetch</h1>
        {console.log(this.state.users)}
      </div>
    );
  }
}

export default DataFetch;
