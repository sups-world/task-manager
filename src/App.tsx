import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

//react.fc===functional component
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  // console.log(todo);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      //to empty the field after setting the data
      setTodo("");
    }
  }
  console.log(todos)

  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* <TodoList /> */}

      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
}

export default App;
