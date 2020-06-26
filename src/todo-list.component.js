import React from "react";

const TodoList = ({ todo, editTodo, deleteTodo }) => (
  <div className="container">
    <div className="list-wrapper">
      <ul className="list-group">
        <li className="list-item">{todo}</li>
      </ul>
    </div>
    <div className="action-wrapper">
      <div className="item-action">
        <span onClick={editTodo}>edit</span>
        <span onClick={deleteTodo}>delete</span>
      </div>
    </div>
  </div>
);

export default TodoList;
