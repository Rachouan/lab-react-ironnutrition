import {useState} from 'react';
import { TodaysFood } from "./TodaysFood";
import {Food} from "./Food";

export const Foods = ({foods}) => {
    const [todaysFood, setTodaysFood] = useState([]);
    const appendDish = dish => setTodaysFood([...todaysFood, dish])
    return (
        <div className="columns">
          <div className="column">
            {foods.map((dish,i) => <Food key={i} dish={dish} onAdd={appendDish}/>)}
          </div>
          <TodaysFood foods={todaysFood}/>
        </div>
    )
}