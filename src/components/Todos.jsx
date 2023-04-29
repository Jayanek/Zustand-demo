import { useBookStore } from "../store/todoStore";
import Todo from "./Todo";

const Todos = () => {
  const todoItems = useBookStore((state) => state.todos);
  return (
    <ul className="list-group">
      {todoItems.map((todo) => (
        <Todo todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
