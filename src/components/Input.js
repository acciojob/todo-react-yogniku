import React from 'react'
 import { useState } from 'react';
const Input = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
 

const addTodo=()=>{
    if (inputValue.trim()) {
            setTodos([...todos, inputValue.trim()]);
            setInputValue(''); // Clear the input field after adding
          }
}

  return (
    <div>
<input  placeholder='enter new task' className='border' type='text' value={inputValue} onChange={setInputValue}></input>
<button onClick={addTodo}>add task</button>

    </div>
  )
}

export default Input