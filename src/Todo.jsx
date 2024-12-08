import { Add } from "./components/Add";
import { Status } from "./components/Status";
import { List } from "./components/List";
import { useTodos } from "./hooks/todo";

export const Todo = () => {
  const {
    todos,
    completeTodosCount,
    incompleteTodosCount,
    addInputText,
    editInputText,
    onChangeAddInputText,
    onChangeEditInputText,
    handleToggleIsComplete,
    handleAddTodo,
    handleToggleIsEditing,
    handleUpdateTodo,
    handleDeleteTodo,
  } = useTodos();

  return (
    <>
      <div className="bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-full max-w-[500px] h-[80vh] flex flex-col">
        <div className="flex-shrink-0">
          <h1 className="text-center mb-6 text-[#2c3e50] text-2xl">
            ToDo リスト
          </h1>
          <Add
            addInputText={addInputText}
            onChangeAddInputText={onChangeAddInputText}
            handleAddTodo={handleAddTodo}
          />
          <Status
            todos={todos}
            completeTodosCount={completeTodosCount}
            incompleteTodosCount={incompleteTodosCount}
          />
        </div>
        <div className="overflow-y-auto flex-grow">
          <List
            todos={todos}
            handleToggleIsEditing={handleToggleIsEditing}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            editInputText={editInputText}
            onChangeEditInputText={onChangeEditInputText}
            handleToggleIsComplete={handleToggleIsComplete}
          />
        </div>
      </div>
    </>
  );
};
