import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul style={{ display: 'flex' }}>
      <li>
        <NavLink className="nav-item" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="/blog">
          Blog
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
