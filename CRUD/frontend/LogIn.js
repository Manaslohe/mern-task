import React from "react";
import "./styles.css";
function LogIn() {
  return (
    <div>
      <h1>Student Login Page</h1>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" />
        <input id="submit" type="submit" value="submit" />
      </form>
    </div>
  );
}

export default LogIn;
