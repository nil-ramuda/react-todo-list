import '../index.css'
import { useState, useEffect, useRef } from 'react'


export const List = ({ todos, setTodos, setIncompleteTasksCount }) => {
  const [inputEditTodoText, setEditTodoInputText] = useState("");

  const inputElement = useRef(null);
  
  const onChangeEditTodoFormInputText = e => {
    setEditTodoInputText(e.target.value);
  };

  const onChangeIsComplete = (e, id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: e.target.checked
        }
      } else {
        return todo
      }
    })

    if (e.target.checked === true) {
      setIncompleteTasksCount((prev) => prev - 1);
    } else {
      setIncompleteTasksCount((prev) => prev + 1);
    }
  setTodos(newTodos);
  }
  

  const editTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isEditing: true
        }
      } else {
        if (todo.isEditing === true) {
          return  {
            ...todo,
            isEditing: false
          }
        } else {
          return {
            ...todo
          }
        }
      }
    })
    setTodos(newTodos);
  }

  const updateTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text: inputEditTodoText || todo.text,
          isEditing: false
        }
      } else {
        return todo
      }
    })
    setTodos(newTodos);
  }

  const deleteTodo = id => {
    const targetTodo = todos.find(todo => todo.id === id);
    if (targetTodo.isComplete === false) {
      setIncompleteTasksCount((prev) => prev - 1);
    }
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      {todos.map((todo) => {
        return (
          <ul className="list-none">
            <li 
              key={todo.id}
              className="relative bg-[#f8f9fa] p-4 mb-3 rounded-md transition-all duration-300 hover:bg-[#e9ecef] hover:-translate-y-0.5 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
            >
              {todo.isEditing ? (
                <>
                  <div className="flex items-center">
                    <input
                      id="todo"
                      type="text"
                      defaultValue={todo.text ?? inputEditTodoText}
                      onChange={onChangeEditTodoFormInputText}
                      className="flex-grow px-2 mr-2 border border-[#ced4da] rounded h-9 text-base"
                    />
                    <button
                      onClick={() => updateTodo(todo.id)}
                      className="px-3 py-2 border-none rounded cursor-pointer text-sm transition-all duration-300 bg-[#28a745] text-white h-9 hover:bg-[#218838]"
                    >
                      保存
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center relative">
                    <input
                      id="todo"
                      type="checkbox"
                      checked={todo.isComplete}
                      onChange={(e, id) => onChangeIsComplete(e, todo.id)}
                      className="mr-3 w-[18px] h-[18px] cursor-pointer shrink-0"
                    />
                    <label
                      htmlFor="checkbox"
                      className="flex items-center text-base text-[#333] cursor-pointer overflow-hidden truncate whitespace-nowrap flex-grow"
                    >
                      {todo.text}
                    </label>
                    <button
                      onClick={() => editTodo(todo.id)}
                      className="px-3 py-2 border-none rounded cursor-pointer text-sm transition-all duration-300 bg-[#ffc107] text-[#333] right-[70px] hover:bg-[#e0a800]"
                    >
                      編集
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="px-3 py-2 border-none rounded cursor-pointer text-sm transition-all duration-300 bg-[#dc3545] text-white hover:bg-[#c82333] ml-2"
                    >
                      削除
                    </button>
                  </div>
                </>
              )}
            </li>
          </ul>
        )
      })}  
    </>
  )
}