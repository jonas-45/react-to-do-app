import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos])

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter(todo => todo.id !== id)
    ])
  }

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const editTodoItem = (id, updatedTitle) => {
    const updatedTodos = todos.map((todo => {
      if(todo.id === id){
        return {
          ...todo,
          title: updatedTitle
        }
      }
      return todo;
    }))
    setTodos(updatedTodos);
  }

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList todosProps={todos} handleChange={handleChange} delTodo={delTodo} editTodoItem={editTodoItem} />
    </div>  
  );
}

export default TodosLogic;