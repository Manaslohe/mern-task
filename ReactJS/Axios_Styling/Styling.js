import React from "react";
import "./styles.css"; //if in same folder
// import "../components/styles.css"; //for different folder
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Styling() {
  const style = {
    color: "yellow",
    backgroundColor: "red",
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>Hi I am inline styling</h1>
      <h1
        style={{
          color: "red",
          backgroundColor: "blue",
          padding: "10px",
          margin: "10px",
        }}
      >
        Hi I am inline styling
      </h1>
      <h1 style={style}>Hi I am internal styling</h1>
      <h1 style={style}>Hi I am internal styling</h1>
      <h1 id="i1">Hi I am external styling by id</h1>
      <h1 className="heading">Hi I am external styling</h1>
      <h1 className="text-primary">This is bootstrap styles</h1>
    </div>
  );
}

export default Styling;
