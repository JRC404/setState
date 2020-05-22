import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // state should be used inside of class components...
  // state is an object... {}
  state = {
    digits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    currentNumber: "",
    incrementedNumber: 0
  }

  incrementFunction = () => {
    this.setState({
      incrementedNumber: this.state.incrementedNumber + 1
    })
  }

  decrementFunction = () => {
    this.setState({
      incrementedNumber: this.state.incrementedNumber - 1
    })
  }

  addUserInput = (event) => {
    console.log(event.target.value);
    this.setState({
      currentNumber: event.target.value
      // whatever the event, take what caused the event to take place as the target and then take value of that target...
      // look at the input box (target) and take the value inside of it. (value)
    })
  }

  addNumber = () => {
    this.setState({
      digits: [...this.state.digits, this.state.currentNumber], // digits += number
      currentNumber: ""
    })
  }

  render() {
    const individualNumber = this.state.digits.map((number, index) => {
      return <p key={index}>{number}</p>
    })
    return (
      <div className="App" >
        {/* <p>{this.state.digits[0]}</p> */}
        {individualNumber}
        {/* 1 - 6 */}
        <input type="number" onChange={this.addUserInput} value={this.state.currentNumber} />
        <button onClick={this.addNumber}>Add the user's number</button>
        <p>{this.state.incrementedNumber}</p>
        <button onClick={this.incrementFunction}>Increase me</button>
        <button onClick={this.decrementFunction}>Lower me</button>
        {/* 
          add a userInput value - text or otherwise to a state that doesn't just hold numbers...
          household members... you can add the household member via the input box...

          householdMembers array - state
          newMember value
          addtionalHouseholdMember function - method outside of the state

         */}
      </div>
    );
  }
}

export default App;
