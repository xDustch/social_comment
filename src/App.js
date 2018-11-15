import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import pic from './palpatine.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header fullname="Sheev Palpatine" username="@theSenate" profile_pic={pic}/>
      </div>
    );
  }
}

export default App;
