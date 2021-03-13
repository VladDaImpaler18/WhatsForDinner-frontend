import React, {useState} from 'react';

import './App.css';
function App() {
  const [ingredient,setIngredient] = useState([ //temporary load from history
    { id: 0, name: 'Beef'},
    { id: 1, name: 'Broccoli'},
    { id: 2, name: 'Chicken' },
    { id: 3, name: 'Lamb' },
    { id: 4, name: 'Tuna' }
  ])
  
  

  return (
    <div className="App">
      <header className="App-header">
      
      <div style={{ width: 400 }}>
          
      </div>


      </header>
    </div>
  );
}

export default App;
