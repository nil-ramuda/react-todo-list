import { useState } from 'react'

export const Add = ({ todos, setTodos, setIncompleteTasksCount }) => {
  const [inputAddTodoText, setAddTodoInputText] = useState("");
  const onChangeAddTodoFormInputText = e => setAddTodoInputText(e.target.value);
  const onClickAddTodo = () => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text: inputAddTodoText,
        isComplete: false,
        isEditing: false
      }
    ])
    setAddTodoInputText("");
    setIncompleteTasksCount((prev) => prev + 1);
  }

  return (
    <>
      <div>
      <input type="text" value={inputAddTodoText} placeholder="ToDoを入力" onChange={onChangeAddTodoFormInputText} />
        <button onClick={onClickAddTodo}>追加</button>
      </div>
    </>
  )
}