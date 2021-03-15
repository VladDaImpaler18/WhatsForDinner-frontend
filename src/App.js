import React, {useState} from 'react';
import SearchForm from './components/SearchForm'
import SearchResults from './containers/SearchResults'
import './App.css';
function App() {
   
//Here I should have state of searchResults (to pass down)
//Here I sould have functions on handleOnSubmit to pass down
  return (
    <div className="App">
      <header className="App-header">
      <div style={{ width: 400 }}>
          <SearchForm/>
          <SearchResults />
      </div>


      </header>
    </div>
  );
}

export default App;
