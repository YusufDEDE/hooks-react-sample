import React, { useState } from 'react';
import './App.css';

function Todo({todo, index, completeTodo, deleteTodo, activeTodo}) {
  return <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }} 
  className="todo">
  { todo.text }
  <div>
    <button onClick={() => completeTodo(index)}>Complate</button>
    <button onClick={() => activeTodo(index)}>Active</button>
    <button onClick={() => deleteTodo(index)}>Delete</button>
  </div>
  </div>;
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
       className="input" 
       value={value} 
       placeholder="Add Todo..."
       onChange={e => setValue (e.target.value)}/>
    </form>
  )
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

  const addTodo = text => {
    const NewTodos = [...todos, {text, isCompleted:false}];
    setTodos(NewTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const activeTodo = index => {
    const activeTodos = [...todos];
    activeTodos[index].isCompleted = false;
    setTodos(activeTodos);
  };

  return (
    <div className="app"> 
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} 
          index={index} 
          todo={todo} 
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          activeTodo={activeTodo}
          />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;