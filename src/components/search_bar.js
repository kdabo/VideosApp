import React, { Component } from 'react';

// functional component is a function
// always starting with the simple one, but than upgrading if more states need to be handled
// Example:
// const SearchBar = () => {
//     return <input/>;
// };

// upgrading to class based component (JS object) -> define new class and give it access to all of the functionality that react.component has
// every defined React class must have render method and return .jsx

class SearchBar extends Component {
    // constructor function is the first and only component that is being called automatically whenever new instance of the class is created
    // class component itself has it's constructor function
    // which is the super function parent method
  constructor(props) {
        // in class component props are available anywhere within the class as this.props
     super(props);
        // state is JS object used to record and react to state change
        // initialise state object inside component's constructor method by creating a new object and assign it to this.state
        // object will contain properties that are record on the state which is term property in this case
        // only inside a constructor function is allowed to change state by assigning a value, everywhere else is used this.setState
     this.state = {term: 'Starting Value'};
  }

  render() {
    // change the state by calling this.setState and passing new object
    // input is controlled component in this case because it has its value set by state
    // it means it's value would change whenever the state changes because setState causes the component to rerender
    // when component rerenders, the value of the input is set to new value of this.state.term
    // when user types something, user doesn't change the input value, rather user triggers an event that cause the input value to change

  return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value) }
        />
      </div>
    );
  }

  // declare event handler whenever the event occurs, pass the handler to the element you wan to monitor for events
    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
  }
}

export default SearchBar;