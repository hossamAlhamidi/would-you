import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import authReducer from './reducers/authReducer';
import userReducer from "./reducers/userReducer"
import questionsReducer from "./reducers/questionsReducer"

// DevTool
import { composeWithDevTools } from 'redux-devtools-extension';


const combined = combineReducers({userReducer,authReducer,questionsReducer})
export const store = createStore(combined, composeWithDevTools());

//store.dispatch(Actions.loginUser(0))

ReactDOM.render(
  <Provider store={store}> <App /></Provider>
   
  ,
  document.getElementById('root')
);

