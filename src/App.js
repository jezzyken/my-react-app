import React from "react";
import "./App.css";

import TodoList from "./todo-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      isEditing: false,
      editingIndex: null,
      notification: null,
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

    this.alert("Todo Successfully Added");
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

    this.alert("Todo Successfully Deleted");
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

    this.alert("Todo Successfully Updated");
  };

  generateTodoId = () => {
    const lastTodoId = this.state.todos[this.state.todos.length - 1];

    if (lastTodoId) {
      return lastTodoId.id + 1;
    }
    return 1;
  };

  alert(notification) {
    this.setState({
      notification: notification,
    });

    setTimeout(() => {
      this.setState({ notification: null });
    }, 1000);
  }

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

        {this.state.notification && (
          <div className="notification">{this.state.notification}</div>
        )}

        {!this.state.isEditing &&
          this.state.todos.map((todo, index) => (
            <TodoList
              key={index}
              todo={todo.todo}
              editTodo={() => this.editTodo(index)}
              deleteTodo={() => this.deleteTodo(index)}
            />
          ))}
      </div>
    );
  }
}

export default App;
