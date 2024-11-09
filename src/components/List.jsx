import '../index.css'
import { useState, useEffect, useRef } from 'react'


export const List = ({ todos, setTodos, setIncompleteTasksCount }) => {
  const [inputEditTodoText, setEditTodoInputText] = useState("");
  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);
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
        return todo
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
    if (targetTodo.isComplete === true) {
       
    } else {
      setIncompleteTasksCount((prev) => prev - 1);
    }
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      {todos.map((todo) => {
        return (
          <ul>
            <li key={todo.id}>
              {todo.isEditing ? (
                <>
                  <input
                    id="todo"
                    type="text"
                    defaultValue={todo.text ?? inputEditTodoText}
                    onChange={onChangeEditTodoFormInputText}
                    ref={inputElement}
                    autoFocus={true}
                  />
                  <button
                    onClick={() => updateTodo(todo.id)}>
                    保存
                  </button>
                </>
              ) : (
                <>
                  <input
                    id="todo"
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={(e, id) => onChangeIsComplete(e, todo.id)}
                  />
                  <label htmlFor="checkbox">{todo.text}</label>
                  <button onClick={() => editTodo(todo.id)}>編集</button>
                  <button onClick={() => deleteTodo(todo.id)}>削除</button>
                </>
              )}
            </li>
          </ul>
        )
      })}  
    </>
  )
}