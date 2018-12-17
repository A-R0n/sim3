import React, { Component } from 'react';
import './Auth.css';


class Auth extends Component {
    render() {
      return (
        <div className="Auth">
       
          <img className='wink_face' src='https://image.flaticon.com/icons/svg/42/42877.svg'></img>
          <h1 className='Helo'>Helo</h1>
          <div className='Helo_login'>
            <p id='username'>Username:</p>
            <input id='username_input'></input>
            <p id='passowrd'>Password:</p>
            <input id='password_input'></input>
          </div>
          <div className='login_and_out_buttons'>
            <button>Login</button>
            <button>Logout</button>
          </div>
        </div>
      );
    }
  }
  
  export default Auth;