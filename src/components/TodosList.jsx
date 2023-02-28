import TodoItem from "./TodoItem";

const TodosList = ({todosProps, handleChange, delTodo, handleEdit}) => {
  console.log('HEY HEY HEY', handleEdit);
  return (
    <ul>
      {console.log('TodosProp: ', todosProps)}
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} editTodoItem={handleEdit} />
      ))}
    </ul>
  );
}

export default TodosList;