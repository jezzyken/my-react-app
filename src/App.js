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
    const todoId = this.state.todos.length - 1;

    const newTodo = {
      todo: this.state.newTodo,
      id: todoId,
    };

    todos.push(newTodo);
    this.setState({ todos });

    if (todoId.length < 0) {
      return todoId.id + 1;
    }
    return 1;
  };

  editTodo = () => {
    alert("Edit");
  };

  deleteTodo = (index) => {
    const todos = this.state.todos;
    delete todos[index];
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

        {this.state.todos.map((todo, index) => (
          <div className="container" key={todo.id}>
            <div className="list-wrapper">
              <ul className="list-group">
                <li className="list-item">{todo.todo}</li>
              </ul>
            </div>
            <div className="action-wrapper">
              <div className="item-action">
                <span onClick={this.editTodo}>edit</span>
                <span onClick={() => this.deleteTodo(index)}>delete</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
