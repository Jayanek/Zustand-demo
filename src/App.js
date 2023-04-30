import "./App.css";
import NavBar from "./components/NavBar";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
