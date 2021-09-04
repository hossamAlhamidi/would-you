import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reportWebVitals from './reportWebVitals';
import * as Actions from "./actions/actions"
import authReducer from './reducers/authReducer';
import userReducer from "./reducers/userReducer"

// DevTool
import { composeWithDevTools } from 'redux-devtools-extension';


const combined = combineReducers({userReducer,authReducer})
export const store = createStore(combined, composeWithDevTools());

//store.dispatch(Actions.loginUser(0))

ReactDOM.render(
  <Provider store={store}> <App /></Provider>
   
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
