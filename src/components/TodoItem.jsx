import { useState } from 'react';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(!editing);
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
      {editing ? <input type="text" value={itemProp.title} className={styles.textInput} onChange={(e) => console.log(e.target.value, itemProp.id)}/> : null}
    </li>
  )
}

export default TodoItem;