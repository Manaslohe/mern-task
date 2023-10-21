import React from "react";

function FuncClick() {
  let click = () => {
    document.getElementById("i1").innerHTML = "Hello, I am Superman";
  };
  return (
    <div>
      <h1 id="i1">Hi I am Batman</h1>
      <button onClick={click}>Change Message</button>
    </div>
  );
}

export default FuncClick;
