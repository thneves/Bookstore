import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reducer from './reducers/index';

const initialState = [
  {
    id: Math.floor(Math.random() * 100) + 1,
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami',
    category: 'Mistery',
  },
  {
    id: Math.floor(Math.random() * 100) + 1,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
  },
  {
    id: Math.floor(Math.random() * 100) + 1,
    title: 'Clean Code',
    author: 'Uncle Bob',
    category: 'Learning',
  },
];

const store = createStore(reducer, { books: initialState });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
