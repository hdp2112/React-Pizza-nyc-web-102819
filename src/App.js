import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaData: [],
    id: '',
    topping: '',
    size: 'Small',
    vegetarian: ''
  }

  changePizza = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  editPizza = (object) => {
    // e.persist();
    console.log('I hit the edit pizza button!')
    this.setState({
      id: object.id,
      topping: object.topping,
      size: object.size,
      vegetarian: object.vegetarian
    })
  }

  handleSubmit = (e) => {
    console.log('I hit the submit button')
    let object = {topping: this.state.topping, size: this.state.size, vegetarian: (this.state.vegetarian ? true : false)}
    e.preventDefault();
    fetch(`http://localhost:3000/pizzas/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(object)
    }).then(resp => resp.json())
    .then(() => fetch('http://localhost:3000/pizzas')
      .then(response => response.json())
      .then(data => {
      this.setState({
        pizzaData: data
       })
    }))
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(response => response.json())
    .then(data => {
      this.setState({
        pizzaData: data
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm appState={this.state} onChange={this.changePizza} onSubmit={() => this.handleSubmit}/>
        <PizzaList editPizza={this.editPizza} pizzaData={this.state.pizzaData}/>
      </Fragment>
    );
  }
}

export default App;
