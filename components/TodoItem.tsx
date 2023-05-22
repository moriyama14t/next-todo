import React from 'react'

type TodoItemProps = {
  text: string;
  completed: boolean;
  toggleCompletion: () => void;
  deleteSelf: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({text, completed, toggleCompletion, deleteSelf}) => (
  <div>
    <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
    <button onClick={toggleCompletion}>{completed ? 'Undo' : 'Complete'}</button>
    <button onClick={deleteSelf}>Delete</button>
  </div>
)

export default TodoItem;
