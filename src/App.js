import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/toDoList';

function App(props) {
  return (
    <div className="App">
      <List store={props.store} />
    </div>
  );
}

export default App;
