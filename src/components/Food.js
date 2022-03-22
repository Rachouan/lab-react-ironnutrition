import {useState} from 'react';

export const Food = (props) => {
    const { dish, onAdd } = props
    const { name,image,calories } = dish
    const [quantity,setQuantity] = useState(1);
    const addDish = () => onAdd({ ...dish, quantity })
    const increment = (e) => setQuantity(Math.max(e.target.value, 1))
    return (
        <div className="box" >
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image}/>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> <br/>
                    <small>{calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input type="number" className="input" value={quantity} min="1" onChange={increment}/>
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={addDish}>+</button>
                    </div>
                </div>
                </div>
            </article>
        </div>
    )
}