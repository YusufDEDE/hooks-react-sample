import React, { useState } from 'react';
import './App.css';

function Todo({todo, index}) {
  return <div className="todo">{ todo.text }</div>;
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted:false
    },
    {
      text: 'Learn about React 245 win',
      isCompleted:false
    },
    {
      text: 'Learn about React win',
      isCompleted:false
    },
  ]);

  return (
    <div className="app"> 
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default App;