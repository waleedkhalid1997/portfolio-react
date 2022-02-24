import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { Home, About, Contact } from "./Components";
const { Home }= lazy(() => import("./Components/Home"));
const { About }= lazy(() => import("./Components/About"));
const { Contact }= lazy(() => import("./Components/Contact"));
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
            <Route path="about" element={ <Suspense fallback={<div>Loading...</div>}><About /></Suspense>}></Route>
            <Route path="contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>}></Route>
            <Route path="home" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>}>
              <Route path="#info" element={<Suspense fallback={<div>Loading...</div>}><Home type="Info" /></Suspense>}></Route>
              <Route
                path="#projects"
                element={<Suspense fallback={<div>Loading...</div>}><Home type="Projects" /></Suspense>}
              ></Route>
            </Route>
            <Route
              exact
              path="/"
              element={<Navigate replace to="/home" />}
            ></Route>
          </Routes>
        </Router>
      </React.Fragment>
  );
}

export default App;
