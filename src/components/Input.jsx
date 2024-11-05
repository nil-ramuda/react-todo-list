export const Input = (props) => {
  const { inputText, onChange, onClick } = props;

  return (
    <>
      <div>
        <input type="text" value={inputText} placeholder="ToDoを入力" onChange={onChange} />
        <button onCliCk={onClick}>追加</button>
      </div>
    </>
  )
}