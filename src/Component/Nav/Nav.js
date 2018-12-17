import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className={'Nav'}>Nav
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
