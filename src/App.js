import React, {useState} from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './containers/SearchResults';
import './App.css';
//for testing
const json = "{\"chicken\":[{\"title\":\"Chick-Fil-A Sandwich\",\"thumb\":\"https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg\",\"id\":\"53016\"},{\"title\":\"Chicken Couscous\",\"thumb\":\"https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg\",\"id\":\"52850\"},{\"title\":\"Chicken Fajita Mac and Cheese\",\"thumb\":\"https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg\",\"id\":\"52818\"},{\"title\":\"Chicken Ham and Leek Pie\",\"thumb\":\"https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg\",\"id\":\"52875\"},{\"title\":\"Chicken Quinoa Greek Salad\",\"thumb\":\"https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg\",\"id\":\"53011\"},{\"title\":\"General Tso's Chicken\",\"thumb\":\"https://www.themealdb.com/images/media/meals/1529444113.jpg\",\"id\":\"52951\"},{\"title\":\"Honey Balsamic Chicken with Crispy Broccoli & Potatoes\",\"thumb\":\"https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg\",\"id\":\"52993\"},{\"title\":\"Katsu Chicken curry\",\"thumb\":\"https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg\",\"id\":\"52820\"},{\"title\":\"Rappie Pie\",\"thumb\":\"https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg\",\"id\":\"52933\"}]}"
const testData = JSON.parse(json);

function App() {
  const [recipes, setRecipes] = useState(testData)
  //debugger;
//Here I should have state of searchResults (to pass down)
//Here I should have functions on handleOnSubmit to pass down
  return (
    <div className="App">
      <header className="App-header">
      <div style={{ width: 400 }}>
          <SearchForm/>
          <SearchResults recipes={ recipes } />
      </div>


      </header>
    </div>
  );
}

export default App;
