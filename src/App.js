import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyHeader from './components/common/header';
import HomeFeed from './components/homeFeed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader/>
        <HomeFeed/>
      </div>
    );
  }
}

export default App;
