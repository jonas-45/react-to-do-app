import { useState, useRef } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, handleChange, delTodo, editTodoItem,
}) => {
  const [editing, setEditing] = useState(false);
  // const [updatedTask, setUpdatedTask] = useState(itemProp.title);
  const editInputRef = useRef(null);

  const handleEditing = () => {
    setEditing(!editing);
  };
  // const handleEditChange = (title) => {
  //   setUpdatedTask(title);
  //   //editTodoItem(id,title)
  // }
  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      editTodoItem(itemProp.id, editInputRef.current.value);
      setEditing(false);
    }
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
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
      <div className={styles.content} style={viewMode}>
        <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
        <button type="button" onClick={handleEditing}>
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <button type="button" onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      {/* {editing ? <input type="text" value={updatedTask}
      className={styles.textInput} onChange={(e) => handleEditChange(e.target.value)}
      onKeyDown={handleUpdateDone} /> : null} */}
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        onKeyDown={handleUpdateDone}
        style={editMode}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  editTodoItem: PropTypes.func.isRequired,
};

export default TodoItem;
