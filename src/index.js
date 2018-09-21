import React from 'react'; //create Component
import ReactDOM from 'react-dom'; // push it to DOM

import SearchBar from './components/search_bar'; //must give the actual reference to the file we want to import the component from - relative path

const API_KEY = '';

//create Component
const App = () => {
    return (<div>
        <SearchBar/>
    </div>);
};

ReactDOM.render(<App/>, document.querySelector('.container'));