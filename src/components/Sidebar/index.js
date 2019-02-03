import React from 'react';
import { NavLink } from "react-router-dom";
import './index.scss';
import Lyrics from '../Lyrics';
import withAppContext from '../Contexts/withAppContext';

const Sidebar = ({ context }) => (

  <React.Fragment>
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
    <div className={context.lyric ? 'slider' : 'slider close hide'}>
      <div className="lyx"><Lyrics /></div>
    </div>
  </React.Fragment>
);

export default withAppContext(Sidebar);