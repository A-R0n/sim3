import React, { Component } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { get_user, update_password, update_username } from '../../ducks/reducer';
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

  register_ = () => {
    axios.post(`/api/create_user`, {username: this.state.username, password:this.state.password})
  }

  handleChangeName = (e) => {
    this.setState({username: e})
    console.log(this.state)
  }

  handleChangePassword = (e) => {
    this.setState({password: e})
    console.log(this.state)
  }


  render() {
    const { update_username, update_password } = this.props;
    return (
      <div className="Auth">
        <img
          className="wink_face"
          src="https://image.flaticon.com/icons/svg/42/42877.svg"
          alt="wink face"
        />
        <h1 className="Helo">Helo</h1>
        <div className="Helo_login">
          <p id="username">Username:</p>
          <input onChange={(e) => update_username(e.target.value)} id="username_input" />
          <p id="passowrd">Password:</p>
          <input onChange={(e) => update_password(e.target.value)} id="password_input" />
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
  { get_user, update_password, update_username }
)(Auth);
