import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser.id}});
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
