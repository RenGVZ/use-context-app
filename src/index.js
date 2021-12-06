import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

export const UserContext = React.createContext();

const user = {}

ReactDOM.render(
  <UserContext.Provider value={user}>
      <App />
  </UserContext.Provider>,
  document.getElementById('root')
);
