import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      todos: [
        { id: 1, todo: "sleeping" },
        { id: 2, todo: "eating" },
        { id: 3, todo: "coding" },
      ],
    };
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = () => {
    const todos = this.state.todos;

    const newTodo = {
      todo: this.state.newTodo,
      id: todos[todos.length - 1].id + 1,
    };
    todos.push(newTodo);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <h1>MY TODO LIST</h1>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button onClick={this.addTodo}>Add Todo</button>

        <ul className="list-group">
          {this.state.todos.map((todo) => (
            <li className="list-item" key={todo.id}>
              {todo.todo}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
