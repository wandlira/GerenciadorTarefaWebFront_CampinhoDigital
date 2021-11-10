import React from 'react';
import ReactDOM from 'react-dom';
import Home from './View/Home';
import Task from './View/Task';



/* INJETA A FUNÇÃO QUE REPRESENTA A PÁGINA DE HOME NO DOC HTML ATRAVÉS DA DIV ROOT */
ReactDOM.render(
  <React.StrictMode>
    <Task />
  </React.StrictMode>,
  document.getElementById('root')
);
