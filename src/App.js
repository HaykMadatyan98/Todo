import "./App.css";
import Hide from "./components/hide/Hide";
import Input from "./components/input/Input";
import { useEffect, useState } from "react";
import ElementsContainer from "./components/element/ElementsContainer";
import { getUUID } from "./helpers";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    const savedToDo = localStorage.getItem("toDoList");
    const initialValue = JSON.parse(savedToDo);
    if (initialValue?.length) {
      setToDoList(initialValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  const onAddToDo = (newToDo) => {
    const newList = [{ ...newToDo, id: getUUID() }, ...toDoList];
    setToDoList(newList);
  };

  const hideElements = (isHidden) => {
    setIsHide(isHidden);
  };

  const onDeleteToDo = (deletedID) => {
    const newArray = toDoList.filter((elem) => elem.id !== deletedID);
    setToDoList(newArray);
  };

  const changeCompleted = (todoId, isCompleted) => {
    const todos = toDoList.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted,
        };
      }
      return todo;
    });

    setToDoList(todos);
  };

  return (
    <div className="App">
      <div className="hide_button">
        {toDoList.length > 0 && (
          <Hide isHide={isHide} hideElements={hideElements} />
        )}
      </div>
      <Input handleAddFunction={onAddToDo} />
      <ElementsContainer
        onDeleteToDo={onDeleteToDo}
        complete={changeCompleted}
        toDoList={toDoList}
        isHide={isHide}
      />
    </div>
  );
}

export default App;
