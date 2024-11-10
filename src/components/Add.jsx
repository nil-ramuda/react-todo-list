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
      <div className="flex mb-6">
        <input 
          type="text"
          value={inputAddTodoText} 
          placeholder="ToDoを入力" 
          onChange={onChangeAddTodoFormInputText}
          className="flex-1 px-4 py-3 border-2 border-[#e0e0e0] rounded-l-md text-base transition-all duration-300 h-11 focus:border-[#3498db] focus:outline-none focus:shadow-[0_0_0_2px_rgba(52,152,219,0.2)]"
        />
        <button
          onClick={onClickAddTodo}
          className="px-6 py-3 border-none bg-[#3498db] text-white text-base rounded-r-md cursor-pointer transition-colors duration-300 h-11 leading-none hover:bg-[#2980b9]"
        >
          追加
        </button>
      </div>
    </>
  )
}