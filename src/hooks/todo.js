import { useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [addInputText, setAddInputText] = useState("");
  const [editInputText, setEditInputText] = useState("");

  const completeTodosCount = todos.filter((todo) => todo.isComplete).length;
  const incompleteTodosCount = todos.length - completeTodosCount;

  const onChangeAddInputText = (e) => setAddInputText(e.target.value);

  const onChangeEditInputText = (e) => setEditInputText(e.target.value);

  const handleAddTodo = () => {
    if (!addInputText) return;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: crypto.randomUUID(),
        text: addInputText,
        isComplete: false,
        isEditing: false,
      },
    ]);
    setAddInputText("");
  };

  const handleToggleIsEditing = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isEditing: true,
        };
      } else {
        return {
          ...todo,
          isEditing: false,
        };
      }
    });
    setTodos(newTodos);
  };

  const handleUpdateTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: editInputText || todo.text,
          isEditing: false,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const handleToggleIsComplete = (e, id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: e.target.checked,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const canBeDeleted = confirm("本当に削除してよろしいですか？");
    if (!canBeDeleted) return;
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    setTodos,
    completeTodosCount,
    incompleteTodosCount,
    addInputText,
    setAddInputText,
    editInputText,
    setEditInputText,
    onChangeAddInputText,
    onChangeEditInputText,
    handleToggleIsComplete,
    handleAddTodo,
    handleToggleIsEditing,
    handleUpdateTodo,
    handleDeleteTodo,
  };
};
