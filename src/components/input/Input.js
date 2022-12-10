import "./Input.css";
import React, { useState } from "react";

function Input(props) {
  const [text, setText] = useState("");
  const checkError = (e) => {
    if (e.target.value.length > 54) {
      e.target.classList.add("err");
    } else {
      e.target.classList.remove("err");
    }
  };
  const handleChangeText = (e) => {
    checkError(e);
    setText(e.target.value);
  };
  const handleAddFunction = () => {
    if (text && text.length < 54) {
      props.handleAddFunction({ text, isCompleted: false });
      setText("");
    }
  };
  const handleClearInput = (e) => {
    setText("");
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      handleAddFunction();
    }
  };

  return (
    <div className="input_todo">
      <span>Task</span>
      <div>
        <input
          type="text"
          placeholder="Write here"
          value={text}
          onChange={handleChangeText}
          onKeyUp={onEnter}
          className="add_input"
        />
        {text && (
          <span className="clear_input" onClick={handleClearInput}>
            X
          </span>
        )}
        <button className="add_btn" onClick={handleAddFunction}>
          Add
        </button>
      </div>
      {text.length > 54 && (
        <span className="input_err">
          Task content can contain max 54 characters.
        </span>
      )}
    </div>
  );
}

export default Input;
