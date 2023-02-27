import TodoItem from "./TodoItem";

const TodosList = ({todosProps, handleChange, delTodo}) => {
  return (
    <ul>
      {console.log('TodosProp: ', todosProps)}
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} />
      ))}
    </ul>
  );
}

export default TodosList;