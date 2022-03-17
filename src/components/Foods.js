import {useState} from 'react';
import { TodaysFood } from "./TodaysFood";
import {Food} from "./Food";

export const Foods = ({foods}) => {

    const [todaysFood, setTodaysFood] = useState([]);

    const addFood = (food,q) => { 
        const newFood = {...food};
        newFood.quantity = q;
        setTodaysFood([...todaysFood,newFood]);
    };

    return (
        <div className="columns">
          <div className="column">
            {foods.map((food,i) => <Food {...food} key={i} addFood={(q) => { addFood(food,q)}}/>)}
          </div>
        <TodaysFood foods={todaysFood}/>
        </div>
    )
}