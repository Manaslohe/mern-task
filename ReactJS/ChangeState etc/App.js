import "./App.css";
import FuncComp from "./components/FuncComp";
import ClassComp from "./components/ClassComp";
import FuncClick from "./components/FuncClick";
import ClassClick from "./components/ClassClick";
import State from "./components/State";
import Parent from "./components/Parent";
function App() {
  return (
    <div className="App">
      {/* <FuncComp name="Richie" profession="trainer" age="26" />
      <ClassComp /> */}
      {/* <FuncClick />
      <ClassClick />
      <State /> */}
      <Parent />
    </div>
  );
}
// App.js is also a func comp?
export default App;
