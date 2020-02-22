import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.scss";
import Landing from "./components/Landing";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Route path="/" component={Landing} />
      {/* <Link to="/portfolio">Next page</Link> */}

      <Route path="/" component={Portfolio} />
    </div>
  );
}

export default App;
