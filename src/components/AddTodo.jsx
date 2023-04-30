import { useState } from "react";
import { useBookStore } from "../store/todoStore";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const addNewTodo = useBookStore((state) => state.AddNewTodo);
  const AddTodoItem = () => {
    addNewTodo(title, useBookStore.getState());
    setTitle("");
  };
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Type new todo here.."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      ></input>
      <button onClick={AddTodoItem} className="btn btn-primary">
        Add
      </button>
    </>
  );
};

export default AddTodo;
