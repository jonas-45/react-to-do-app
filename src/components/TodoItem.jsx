import { useState, useRef } from 'react';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo, editTodoItem }) => {
  const [editing, setEditing] = useState(false);
  //const [updatedTask, setUpdatedTask] = useState(itemProp.title);
  const editInputRef = useRef(null);

  const handleEditing = () => {
    setEditing(!editing);
  }
  // const handleEditChange = (title) => {
  //   setUpdatedTask(title);
  //   //editTodoItem(id,title)
  // }
  const handleUpdateDone = (e) => {
    if(e.key === 'Enter'){
      editTodoItem(itemProp.id,editInputRef.current.value);
      setEditing(false);
    }
  }
  const viewMode = {};
  const editMode = {};
  if(editing) {
    viewMode.display = 'none';
  }else{
    editMode.display = 'none';
  }
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <div className={styles.content}>
      <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)}/>
      <button onClick={handleEditing}>Edit</button>
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      <span style={itemProp.completed ? completedStyle : null}>
        {itemProp.title}
      </span>
      </div>
      {/* {editing ? <input type="text" value={updatedTask} className={styles.textInput} onChange={(e) => handleEditChange(e.target.value)} onKeyDown={handleUpdateDone} /> : null} */}
      {editing ? <input type="text" ref={editInputRef} defaultValue={itemProp.title} className={styles.textInput} onKeyDown={handleUpdateDone} /> : null}
    </li>
  )
}

export default TodoItem;