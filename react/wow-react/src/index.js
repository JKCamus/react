import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './containers/CommentApp.jsx';
import * as serviceWorker from './serviceWorker';
import {creatStore, createStore} from "redux"
import {Provider} from "react-redux"
import commentReducer from "./reducers/comments"

const store=createStore(commentReducer)
ReactDOM.render(
  <React.StrictMode >
    {/* <App /> */}
    {/* <CommentApp></CommentApp> */}
    <Provider store={store}>
      <CommentApp></CommentApp>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
