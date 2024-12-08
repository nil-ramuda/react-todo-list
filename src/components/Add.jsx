export const Add = ({ addInputText, onChangeAddInputText, handleAddTodo }) => {
  return (
    <div className="flex mb-6">
      <input
        type="text"
        value={addInputText}
        placeholder="ToDoを入力"
        onChange={onChangeAddInputText}
        className="flex-1 px-4 py-3 border-2 border-[#e0e0e0] rounded-l-md text-base transition-all duration-300 h-11 focus:border-[#3498db] focus:outline-none focus:shadow-[0_0_0_2px_rgba(52,152,219,0.2)]"
      />
      <button
        onClick={handleAddTodo}
        className="px-6 py-3 border-none bg-[#3498db] text-white text-base rounded-r-md cursor-pointer transition-colors duration-300 h-11 leading-none hover:bg-[#2980b9]"
      >
        追加
      </button>
    </div>
  );
};
