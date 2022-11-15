import "./App.css";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

function App() {
  return (
    <div className="App">
      <h1>Todo List Using Redux Toolkit</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
