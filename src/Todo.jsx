import { useState } from 'react'
import './index.css'
import { Input } from './components/Input'
import { Status } from './components/Status'
import { List } from './components/List'

export const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isId, setIsId] = useState("");
  const [targetTodo, setTargetTodo] = useState("");

  const [incompleteTasksCount, setIncompleteTasksCount] = useState(0);

  const onChangeInputText = e => {
    // if (!isEditing) {
      setInputText(e.target.value);
      // return  inputText;
    // }
  }

  const onClickAddTodo = () => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text: inputText
      }
    ])
    setInputText("");
    setIncompleteTasksCount((prev) => prev + 1);
  }

  const editTodo = (id) => {
    setIsEditing(true);
    setIsId(id);
    setTargetTodo(todos.find(todo => todo.id == id));
  }

  const updateTodo = (id) => {
    console.log(id);
    const targetTodo = todos.find(todo => todo.id == id);
    console.log(targetTodo.text);
  }

  return (
    <>
      <h1>ToDo リスト</h1>
      <div>
        <input type="text" value={inputText} placeholder="ToDoを入力" onChange={onChangeInputText} />
        <button onClick={onClickAddTodo}>追加</button>
      </div>
      <div>
        <p>すべてのタスク：<span>{todos.length}</span></p>
        <p>完了：<span>{todos.length - incompleteTasksCount}</span></p>
        <p>未完了：<span>{incompleteTasksCount}</span></p>
      </div>
      <ul>
        {todos.map((todo) =>
          <li key={todo.id}>
            {isEditing && isId === todo.id ? (
              <>
                <input
                  id="checkbox"
                  type="text"
                  value={targetTodo.text}
                  // onChange={onChangeInputText}
                />
                <button onClick={() => updateTodo(todo.id)}>保存</button>
              </>
            ) : (
              <>
                <input
                  id="checkbox"
                  type="checkbox"
                />
                <label htmlFor="checkbox">{todo.text}</label>
                <button onClick={() => editTodo(todo.id)}>編集</button>
                <button>削除</button>
              </>
            )}
          </li>
        )}
      </ul>

      {/* <Input /> */}
      {/* <Status></Status> */}
      {/* <List todos={todos}></List> */}
    </>
  )
}

