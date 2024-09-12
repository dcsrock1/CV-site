import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavComp from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";


function App() {
  return (
    <BrowserRouter>
    <NavComp />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
