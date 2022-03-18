import {useState} from 'react';
import { TodaysFood } from "./TodaysFood";
import {Food} from "./Food";

export const Foods = ({foods}) => {

    const [todaysFood, setTodaysFood] = useState([]);

    const addFood = (food,quantity) => setTodaysFood([...todaysFood,{...food,quantity}]);

    return (
        <div className="columns">
          <div className="column">
            {foods.map((food,i) => <Food {...food} key={i} addFood={(q) => { addFood(food,q)}}/>)}
          </div>
        <TodaysFood foods={todaysFood}/>
        </div>
    )
}