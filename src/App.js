import React from 'react';
import foods from './foods.json';
import { useState } from 'react';
import {Foods} from './components/Foods' 
import 'bulma/css/bulma.css';

function App() {
  const [foodList,setFoodList] = useState(foods);
  const [search,setSearch] = useState('');
  const filteredFoodList = foodList.filter(food => food.name.includes(search) );
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div className="columns">
          <div className="column"><input type="text" className="input search-bar" name="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/></div>
        </div>
        <Foods foods={filteredFoodList}/>
      </div>
    </div>
  )
}

export default App;
