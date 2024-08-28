import React, { useState } from 'react';
// import Input from './Input';
// import List from './List';

function TodoList() {

//   const taskss = [
//     {
//         id : 1,
//         task : "Khana Khao"
//     },
//     {
//         id : 2,
//         task : "Brush Kro"
//     },
//     {
//         id : 3,
//         task : "So jao"
//     },
//     {
//         id : 4,
//         task : "Sapne matt dekho"
//     },
// ]


  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

 
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue(''); // Clear the input field after adding
    }
  };

  
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
       <h2>To-Do List</h2>
     <input
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul> 
     {/* <Input/>
     <List tasks={tasks} setTasks={setTasks}/> */}
    </div>
  );
}

export default TodoList;
