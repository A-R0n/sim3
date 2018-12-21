import React, { Component } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { get_user, pword, uname } from '../../ducks/reducer';
import { updateUser} from '../../ducks/reducer';
import { connect } from 'react-redux';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    axios.get('/api/session').then(result => {
      if (result.data.user) {
        this.props.updateUser(result.data.user);
      }
    });
  }

  login_ = () => {
    axios.post(`/api/login`, this.state).then(res => {
      this.props.updateUser(res.data);
    });
  };

  register_ = () => {
    axios
      .post(`/api/create_user`, Object.assign({}, this.state, {
        img: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&w=350&h=254'
      }))
      .then((result) => {
				this.props.updateUser(result.data);
				this.props.history.push('/dashboard');
			});
  };

  handleChange = (e, name) => {
    this.setState({ [name]: e.target.value });
  };

  render() {
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
          <input
            value={this.state.username}
            onChange={e => this.handleChange(e, 'username')}
            type="text"
            id="username_input"
          />
          <p id="passowrd">Password:</p>
          <input
            value={this.state.password}
            onChange={e => this.handleChange(e, 'password')}
            type="password"
            id="password_input"
          />
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
  { updateUser}
)(Auth);
