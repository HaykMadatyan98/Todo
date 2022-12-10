import React from "react";
import "./element.css";
import Element from "./Element";

function ElementsContainer({ toDoList, complete, onDeleteToDo, isHide }) {
  if (toDoList.length === 0) {
    return (
      <div className="empty">
        <h3>Your life is blank page. You write on it.</h3>
        <h1>So start by adding your tasks here.</h1>
      </div>
    );
  }

  return (
    <>
      {toDoList.map((todo) => {
        if (isHide && todo.isCompleted) {
          return null;
        }
        return (
          <Element
            todo={todo}
            complete={complete}
            onDeleteToDo={onDeleteToDo}
            key={todo.id}
          />
        );
      })}
    </>
  );
}

export default ElementsContainer;
