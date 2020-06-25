import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>MY TODO LIST</h1>
        <input type="text" />
        <button>Add Todo</button>

        <ul className="list-group">
          <li className="list-item">Test</li>
          <li className="list-item">Test</li>
          <li className="list-item">Test</li>
        </ul>
      </div>
    );
  }
}

export default App;
