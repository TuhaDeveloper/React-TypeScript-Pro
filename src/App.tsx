import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import FormSubmit from './components/FormSubmit';
import NewUser from './components/NewUser';

const btnStyle = { backgroundColor: "green", padding: "0.5rem" };

function App() {


  return (
    <div className="App">
      <h1>React TypeScript App</h1>

      <Counter />
    </div>
  );
}

export default App;
