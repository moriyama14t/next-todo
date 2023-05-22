import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

type Todo = {
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = window.localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const text = prompt("TODOを入力してください");
    if (text) {
      const newTodos = [...todos, { text, completed: false }];
      setTodos(newTodos);
    }
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleCompletion = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <button onClick={addTodo}>Add TODO</button>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          text={todo.text} 
          completed={todo.completed} 
          toggleCompletion={() => toggleCompletion(index)} 
          deleteSelf={() => deleteTodo(index)} 
        />
      ))}
    </div>
  );
}

export default TodoList;
