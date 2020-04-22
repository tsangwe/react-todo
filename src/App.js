import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar>
        <Toolbar>
            <Typography variant="h6">
              Todo List
            </Typography>
            </Toolbar>
        </AppBar>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
