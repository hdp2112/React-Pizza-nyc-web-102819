import React from "react";
// import PizzaForm from './PizzaForm';

const Pizza = (props) => {
  let object = {id: props.id, topping: props.topping, size: props.size, vegetarian: (props.vegetarian ? 'true' : 'false')}
  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? 'Yes' : 'No'}</td>
      <td><button onClick={() => props.editPizza(object)} id={props.id} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
