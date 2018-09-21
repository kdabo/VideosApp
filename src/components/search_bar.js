import React, { Component } from 'react';

//functional component because it literally is a function
// always start with the simple one,  but than upgrade if you need to handle more states
// const SearchBar = () => {
//     return <input/>;
// };

//upgrade to class based component (JS object) - define new class and give it access to all of the functionality that react.component has
//every defined React class must have render method and return .jsx

// declare event handler whenever the event occurs, pass the handler to the element you wan to monitor for events
class SearchBar extends Component {
    //state is JS object used to record and react to state change

    // initialise state object inside component'' constructor method
    // constructor function is first and only component that is being called automatically whenever new instance of the class is created
    constructor(props) {
        // Component itself has it's constructor function - so when we define a method that is already defined in Component on the parent class
        // which is Component we can call the parent method by calling super
        super(props);
        //initialise state by creating a new object and assign it to this.state
        // object will contain properties that we want to record on the state which is term in this case
        // only inside a constructor function is allowed to change state like this, everywhere else we use this.setState
        this.state = {term: 'Starting Value'};
    }

  render() {
        //change the state by calling this.setState and passing new object
       // input is controlled component here because it has its value set by state so it's value change whenever the state changes because setState causes the component to re render
      // and when it re renders the value of the input is set to new value of this.state.term
      // when user type something they didn't change the input value, they triggered an event and because we updated the state pf the event that cause the input value to change
      return (
          <div>
           <input
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value }) } />
          </div>
    );
  }
}

export default SearchBar;