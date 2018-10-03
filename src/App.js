import React, { Component } from 'react';

import './App.css';
import Project from './Components/Project';

class App extends Component {
    render() {
        return ( <div className = "App">
            <header className ="App-header">
            <h1 className = "App-title"> Welcome to Movie DB </h1></header> <p className = "App-intro">
            This is a website that shows a user the current, popular and upcoming movies. </p>
            <p>alilili</p>   
            <Project/>
            </div>
        );
    }
}

export default App;