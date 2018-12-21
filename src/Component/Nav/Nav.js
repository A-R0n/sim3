import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { updateUser} from '../../ducks/reducer';


class Nav extends Component {
  constructor(props) {
    super(props)
  }

  
  render() {
    console.log(this.props)
    const image = this.props.profile_pic || 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&w=350&h=254';
    return (
      <div className={'Nav'}>
        <p>Hi {this.props.username}!</p>
        <img src={image} alt='imhbhe'></img>
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
  { updateUser}
)(Nav);
