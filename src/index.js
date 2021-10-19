import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
// import RecipeReducer from './reducers/RecipeHistoryReducer.js'; //unused
import MealReducer from './reducers/MealReducer'
import Navbar from './components/navigation/Navbar'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import MealForm from './components/MealForm';

const store = createStore(
  MealReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <>
        {/* <Navbar /> */}
        <Route exact path="/" component={ MealForm } />

      </>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
