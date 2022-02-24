import { Box, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import './App.css';
import ToDo from './components/ToDo/ToDo';
import ToDos from './components/ToDos/ToDos';
import { ITodos } from './components/Types/Types'


function App() {

  const [todos, setTodos] = React.useState<ITodos>(JSON.parse(`${localStorage.getItem('todos')}`) || { todos: [] });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodosItems = (title: string) => {
    setTodos({
      todos: [
        { title, completed: false, id: todos.todos.length + 1 },
        ...todos.todos
      ]
    });
  };

  const deleteTodosItems = (id: number) => {
    setTodos({
      todos: todos.todos.filter(t => t.id !== id)
    });
  };

  const toggleTodosItems = (id: number) => {
    setTodos({
      todos: todos.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    });
  }

  return (

    <div className="App">

      <Box bgcolor="success.main" sx={{ height: '100vh' }}>
        <Box width="50%" sx={{ pt: 10, mx: 'auto' }}>
          <Paper elevation={3}>
            <ToDo addTodos={addTodosItems} />
            <ToDos
              todos={todos}
              toggleTodos={toggleTodosItems}
              deleteTodos={deleteTodosItems} />
          </Paper>
        </Box>
      </Box>

    </div >
  );
}





export default App;
