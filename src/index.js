import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

export const UserContext = React.createContext();

const user = {
  name: 'Gavin',
  email: 'gavin.rene.g@gmail.com'
}

ReactDOM.render(
  <UserContext.Provider value={user}>
      <App />
  </UserContext.Provider>,
  document.getElementById('root')
);
