import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="" style={{marginBottom: '50px', marginTop: '20px'}}>
          <Link to="/" style={{marginRight: '20px'}}>Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>

        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
