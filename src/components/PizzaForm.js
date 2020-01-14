import React from "react"

class PizzaForm extends React.Component { 
  
  object = {id: this.props.id, topping: this.props.topping, size: this.props.size, vegetarian: (this.props.vegetarian ? 'true' : 'false')}
  render(){
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={this.props.onChange} className="form-control" name="topping" placeholder="Pizza Topping" value={this.props.appState.topping}/>
        </div>
        <div className="col">
          <select name="size" onChange={this.props.onChange} value={this.props.appState.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={this.props.onChange} className="form-check-input" type="radio" name="vegetarian" value={!!this.props.appState.vegetarian} checked={null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={this.props.onChange} className="form-check-input" type="radio" name="vegetarian" value={!this.props.appState.vegetarian} checked={null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.props.onSubmit()}>Submit</button>
        </div>
      </div>

)
  }
}

export default PizzaForm
