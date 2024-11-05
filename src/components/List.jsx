import '../index.css'

export const List = (props) => {
  const { todos }  = props;

  return (
    <>
      <ul>
        {todos.map((todo, index) => 
          <li key={index}>
            <input id="checkbox" type="checkbox" />
            <label htmlFor="checkbox">{todo}</label>
          </li>
        )}
      </ul>
    </>
  )
}