import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 35 },
  { id: 2, message: 'It is my first post', likesCount: 42 },
]

let dialogs = [
  { id: 1, name: 'Olya' },
  { id: 2, name: 'Boris' },
  { id: 3, name: 'Alina' },
  { id: 4, name: 'Elena' },
  { id: 5, name: 'Ivan' },
  { id: 6, name: 'Vladimir' },
]

let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'Yo' },
  { id: 3, message: 'How are you?' },
  { id: 4, message: 'Hello, my friend' },
  { id: 5, message: 'YO' },
  { id: 6, message: 'Good evening' },
]
ReactDOM.render(
  <React.StrictMode>
      <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
