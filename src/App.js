import React from "react";
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Contact } from "./Components";
function App() {
  return (
    <React.Fragment>
      <Router>
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="home" element={<Home />}>
            <Route path="#info" element={<Home type="Info" />}></Route>
            <Route path="#projects" element={<Home type="Projects" />}></Route>
          </Route>
          <Route exact path="/" element={<Navigate replace to="/home" />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
