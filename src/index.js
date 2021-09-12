import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import authReducer from './reducers/authReducer';
import userReducer from "./reducers/userReducer"
import questionsReducer from "./reducers/questionsReducer"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// DevTool
import { composeWithDevTools } from 'redux-devtools-extension';


const combined = combineReducers({userReducer,authReducer,questionsReducer})
export const store = createStore(combined, composeWithDevTools());



ReactDOM.render(
  <Provider store={store}> <App /></Provider>
   
  ,
  document.getElementById('root')
);

