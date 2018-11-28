import React from 'react';
import { NavLink } from "react-router-dom";
import './index.scss';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="brand">Sleek</div>
    <ul className="links">
      <li className="active"><NavLink to="/">Home</NavLink></li>
       <li><NavLink to='/explore'>Explore</NavLink></li>
       <li><NavLink to='/explore'>My music</NavLink></li>
       <li><NavLink to='/explore'>Favorite tracks</NavLink></li>
       <li><NavLink to='/explore'>Playlists</NavLink></li>
       <li><NavLink to='/explore'>Albums</NavLink></li>
    </ul>
  </aside>
);

export default Sidebar;