import logo from "./logo.svg";
import "./App.css";
import Styling from "./components/Styling";
import DataFetch from "./components/DataFetch";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      {/* <Styling /> */}
      {/* <DataFetch /> */}
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
