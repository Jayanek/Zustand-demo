import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Todos />
      </div>
    </>
  );
}

export default App;
