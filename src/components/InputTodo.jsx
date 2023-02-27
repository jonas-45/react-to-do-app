import { useState } from "react";

const InputTodo = ({addTodoItem}) => {
  const [title, setTitle] = useState("Add Todo...");
  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    } else {
      alert('Please add item');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add todo..." value={title} onChange={handleChange} /> <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputTodo;