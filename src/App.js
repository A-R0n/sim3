import React, { Component } from 'react';
import './App.css';
import Nav from './Component/Nav/Nav';
import Auth from './Component/Auth/Auth';
import Form from './Component/Form/Form';
import Dashboard from './Component/Dashboard/Dashboard';
import Post from './Component/Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Auth />
        <Dashboard />
        <Form />
        <Post />
      </div>
    );
  }
}

export default App;
