import React, { Component } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { get_user } from '../../ducks/reducer';
import { connect } from  'react-redux';

class Auth extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  login_ = () => {
    this.props.get_user();
  }
  render() {
    return (
      <div className="Auth">
        <img
          className="wink_face"
          src="https://image.flaticon.com/icons/svg/42/42877.svg"
        />
        <h1 className="Helo">Helo</h1>
        <div className="Helo_login">
          <p id="username">Username:</p>
          <input id="username_input" />
          <p id="passowrd">Password:</p>
          <input id="password_input" />
        </div>
        <div className="login_and_out_buttons">
          <div className="login_btn">
            <Link className="link_btn" to="/dashboard">
              <button onClick={() => this.login_()}>Login</button>
            </Link>
            <Link className="link_btn" to="/dashboard">
              <button onClick={() => this.register_()}>Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { get_user }
)(Auth);
