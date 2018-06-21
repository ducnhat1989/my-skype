import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => (
  <div className="App">
    <Sidebar />
    <Main />
  </div>
);

export default App;
