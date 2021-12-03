import React, { Component } from "react";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar
        </a>
      </nav>
    );
  }
}

export default App;
