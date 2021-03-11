import React, {useState} from 'react';

import './App.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
function App() {
  const [ingredient,setIngredient] = useState([ //temporary load from history
    { id: 0, name: 'Beef'},
    { id: 1, name: 'Broccoli'},
    { id: 2, name: 'Chicken' },
    { id: 3, name: 'Lamb' },
    { id: 4, name: 'Tuna' }
  ])
  
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  return (
    <div className="App">
      <header className="App-header">
      <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
          items={ingredient}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          />
      </div>


      </header>
    </div>
  );
}

export default App;
