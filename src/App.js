// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './route/App';

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
