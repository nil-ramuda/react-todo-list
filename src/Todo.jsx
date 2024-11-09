import { useState } from 'react'
import './index.css'
import { Add } from './components/Add'
import { Status } from './components/Status'
import { List } from './components/List'

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [incompleteTasksCount, setIncompleteTasksCount] = useState(0); 

  return (
    <>
      <h1>ToDo リスト</h1>
      <Add 
        todos={todos}
        setTodos={setTodos}
        setIncompleteTasksCount={setIncompleteTasksCount}
      />
      <Status
        todos={todos}
        incompleteTasksCount={incompleteTasksCount}
      />
      <List
        todos={todos}
        setTodos={setTodos}
        setIncompleteTasksCount={setIncompleteTasksCount}
      />
    </>
  )
}

