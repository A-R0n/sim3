import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ducks/store';
import routes from './routes';
import Nav from './Component/Nav/Nav';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            {window.location.pathname === '/' ? null : (
              
                <Nav />
            
            )}
            <div className="routes">{routes}</div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
