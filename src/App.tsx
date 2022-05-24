import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import "./main.css";

function App() {
  return (
    <div className="App">
      {/* <p className="border border-blue-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque distinctio ab quis
        nostrum rerum sapiente, quasi cumque in corporis ut a repudiandae pariatur quam
        necessitatibus! Suscipit fugit aliquid provident.
      </p> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
