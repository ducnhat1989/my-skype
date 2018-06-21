import React from 'react';
import '../styles/App.css';

import store from '../store';

import  _ from 'lodash';

import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

const App = () => {
  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};

export default App;
