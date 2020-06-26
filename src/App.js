import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      isEditing: false,
      editingIndex: null,
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
      id: this.generateTodoId(),
    };

    todos.push(newTodo);
    this.setState({ todos });
  };

  editTodo = (index) => {
    const todo = this.state.todos[index];
    this.setState({
      isEditing: true,
      newTodo: todo.todo,
      editingIndex: index,
    });
  };

  deleteTodo = (index) => {
    const todos = this.state.todos;
    delete todos[index];
    this.setState({ todos });
  };

  updateTodo = () => {
    const todo = this.state.todos[this.state.editingIndex];
    const todos = this.state.todos;

    todo.todo = this.state.newTodo;

    todos[this.state.editingIndex] = todo;

    this.setState({
      todos,
      isEditing: false,
      editingIndex: null,
    });
  };

  generateTodoId = () => {
    const lastTodoId = this.state.todos[this.state.todos.length - 1];

    if (lastTodoId) {
      return lastTodoId.id + 1;
    }
    return 1;
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
        <button onClick={this.state.isEditing ? this.updateTodo : this.addTodo}>
          {this.state.isEditing ? "Update Todo" : "Add Todo"}
        </button>

        {!this.state.isEditing &&
          this.state.todos.map((todo, index) => (
            <div className="container" key={todo.id}>
              <div className="list-wrapper">
                <ul className="list-group">
                  <li className="list-item">{todo.todo}</li>
                </ul>
              </div>
              <div className="action-wrapper">
                <div className="item-action">
                  <span onClick={() => this.editTodo(index)}>edit</span>
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
