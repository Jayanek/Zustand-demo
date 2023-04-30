import { create } from "zustand";
import axios from "axios";

const store = (set, get) => {
  axios
    .get("https://localhost:7284/api/Todo")
    .then((response) => {
      set({ todos: response.data });
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    todos: [],
    AddNewTodo: (title, state) => {
      const lastId = state.todos[state.todos.length - 1];
      const newtdod = {
        id: lastId + 1,
        title,
        completed: false,
        userId: 32,
      };
      set((state) => ({ todos: [newtdod, ...state.todos] }));
    },
  };
};

export const useBookStore = create(store);
