import { useState } from 'react'
import { Add } from './components/Add'
import { Status } from './components/Status'
import { List } from './components/List'

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  
  const [incompleteTasksCount, setIncompleteTasksCount] = useState(0); 

  return (
    <>
      <div className="bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-full max-w-[500px] h-[80vh] flex flex-col">
        <div className="flex-shrink-0">
          <h1 className="text-center mb-6 text-[#2c3e50] text-2xl">ToDo リスト</h1>
          <Add 
            todos={todos}
            setTodos={setTodos}
            setIncompleteTasksCount={setIncompleteTasksCount}
          />
          <Status
            todos={todos}
            incompleteTasksCount={incompleteTasksCount}
          />
        </div>
        <div className="overflow-y-auto flex-grow">
          <List
            todos={todos}
            setTodos={setTodos}
            setIncompleteTasksCount={setIncompleteTasksCount}
          />
        </div>
      </div>
    </>
  )
}

