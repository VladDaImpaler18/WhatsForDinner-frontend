import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import RecipeReducer from './reducers/RecipeHistoryReducer.js';
import Navbar from './components/navigation/Navbar'
import History from './components/navigation/History'

import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(
  RecipeReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <>
        <Navbar />
        <Route path="/" component={ App } />
        <Route exact path="/history" component={ History } />
      </>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
