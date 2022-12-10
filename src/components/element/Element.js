import React, { useState } from "react";
import "./element.css";
import Modal from "../modal/Modal";

function Element({ todo, complete, onDeleteToDo }) {
  const [openModal, setOpenModal] = useState(false);
  const handleChangeCompleted = (e) => {
    complete(todo.id, e.target.checked);
  };

  const handleDelete = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Modal
        open={openModal}
        id={todo.id}
        onClose={() => setOpenModal(false)}
        onConfirm={() => {
          onDeleteToDo(todo.id);
          setOpenModal(false);
        }}
      />
      <div className="element_container" key={todo.id}>
        <div className="element">
          <div className="element_inputs">
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={handleChangeCompleted}
            />
            <span className={todo.isCompleted ? "completed" : ""}>
              {todo.text}
            </span>
          </div>
          <span className="delete_todo" onClick={handleDelete}>
            X
          </span>
        </div>
      </div>
    </>
  );
}

export default Element;
