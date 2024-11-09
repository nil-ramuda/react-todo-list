export const Status = ({ todos, incompleteTasksCount }) => {
  return (
    <>
      <div>
        <p>すべてのタスク：<span>{todos.length}</span></p>
        <p>完了：<span>{todos.length - incompleteTasksCount}</span></p>
        <p>未完了：<span>{incompleteTasksCount}</span></p>
      </div>
    </>
  )
}