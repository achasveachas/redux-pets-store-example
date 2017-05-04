import React, { Component } from 'react';
import PetsList from './components/PetsList';
import PetForm from './components/PetForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Pets app</h2>
        </div>
        <p className="App-intro">
          <span>Pets are coming soon</span>
        </p>
        <PetForm />
        <PetsList />
      </div>
    );
  }
}

export default App;

