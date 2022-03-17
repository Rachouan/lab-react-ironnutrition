export const TodaysFood = ({foods}) => {
    return(
        <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
                {foods.map(({name, quantity,calories},i) => <li key={i}>{quantity} {name} = {calories*quantity} cal</li>)}
            </ul>
            <strong>Total: {foods.reduce((t,{calories,quantity}) => t + calories*quantity ,0)} cal</strong>
        </div>
    )
}