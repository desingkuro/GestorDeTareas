import React, {useEffect} from "react";
import { useAsyncStorage } from "./UseAsyncStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const initialTodos = [
    { key: '1', text: 'Estudiar Matemáticas Especiales.', completed: false },
    { key: '2', text: 'Elemento 2', completed: false },
    { key: '3', text: 'Elemento 3', completed: false },
    { key: '4', text: 'Elemento 4', completed: false },
    { key: '5', text: 'Elemento 5', completed: false },
    { key: '6', text: 'Elemento 6', completed: false },
  ];

  const {
    item: todos, 
    saveItem: saveTodos,
  } = useAsyncStorage('Task', initialTodos);
  
 

const [openModal, setOpenModal] = React.useState(false);
  
const completedTodos = todos.filter(todo => !!todo.completed).length;
const inProgressTodos = todos.length - completedTodos;

const addTodo = (text) => {
  const newTodos = [...todos];
  newTodos.push({
    text,
    completed: false,
  });
  saveTodos(newTodos);
}

const completeTodo = (text) => {
  const todoIndex = todos.findIndex((todo) => todo.text === text);
  const newTodos = [...todos];
  newTodos[todoIndex].completed =! newTodos[todoIndex].completed;
  saveTodos(newTodos);
};

const deleteTodo = (text) => {
  const newTodos = todos.filter((todo) => todo.text != text);
  saveTodos(newTodos);
};

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        inProgressTodos,
        todos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
