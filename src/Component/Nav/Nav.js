import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
  componentDidMount() {
    this.props.get_user();
  }
  render() {
    const { username, password } = this.props.reducer;
    const image = this.props.img || 'https://robohash.org/';
    return (
      <div className={'Nav'}>
        Nav
        <Link to="/dashboard">
          <img
            className="nav_icon"
            src="https://image.flaticon.com/icons/svg/149/149064.svg"
            alt="Home Icon"
          />
        </Link>
        <Link to="/new">
          <img
            className="nav_icon"
            src="https://www.flaticon.com/premium-icon/icons/svg/1043/1043838.svg"
            alt="Form Link"
          />
        </Link>
        <Link to="/">
          <img
            className="nav_icon power"
            src="https://image.flaticon.com/icons/svg/1246/1246273.svg"
            alt="Power Button"
          />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { get_user, update_password, update_username }
)(Nav);
