import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () =>
  <div className="navbar">
    <Link to="/counter">
      Counter
    </Link>
    <Link to="/dog-fetch">
      API Call
    </Link>
    <Link to="/dog-breed">
      Dependency
    </Link>
    <Link to="/dog-sns">
      SNS
    </Link>
    <Link to="/hello">
      Hello
    </Link>
  </div>

export default NavBar;
