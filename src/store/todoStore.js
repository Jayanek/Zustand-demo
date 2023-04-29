import create from "zustand";

const store = (set) => ({
  todos: [
    {
      id: 1,
      title: "Do something nice for someone I care about",
      completed: true,
      userId: 26,
    },
    {
      id: 2,
      title: "Memorize the fifty states and their capitals",
      completed: false,
      userId: 48,
    },
    { id: 3, title: "Watch a classic movie", completed: false, userId: 4 },
    {
      id: 4,
      title:
        "Contribute code or a monetary donation to an open-source software project",
      completed: false,
      userId: 48,
    },
    { id: 5, title: "Solve a Rubik's cube", completed: false, userId: 31 },
  ],
});

export const useBookStore = create(store);
