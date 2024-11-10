export const Status = ({ todos, incompleteTasksCount }) => {
  return (
    <>
      <div className="bg-[#f8f9fa] p-4 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex justify-between mb-6">
        <p className="text-sm text-[#555] m-0">
          すべてのタスク：
          <span className="font-bold text-[#2c3e50] ml-1">{todos.length}</span>
        </p>
        <p className="text-sm text-[#555] m-0">
          完了：
          <span className="font-bold text-[#2c3e50] ml-1">
            {todos.length - incompleteTasksCount}
          </span>
        </p>
        <p className="text-sm text-[#555] m-0">
          未完了：
          <span className="font-bold text-[#2c3e50] ml-1">
            {incompleteTasksCount}
          </span>
        </p>
      </div>
    </>
  );
};
