import React from 'react';
import  { Link } from 'react-router-dom';

import search from "../../assets/icons/search.svg";
import './index.scss';

const Nav = ({ context: { searchSongs } }) => {
  const query = localStorage.getItem('query')
  const handleSearch = e => {
    searchSongs(e.target.value);
  }

  return (
    <header>
      <nav className="navbar">
        <div className="search">
          <Link to="/search">
            <input type="text" placeholder="Search" className="search--bar" onChange={handleSearch} value={query} />
          </Link>
          <img src={search} alt="" className="search--icon" />
        </div>
        <img src="https://lh5.googleusercontent.com/-V6XNf3iCNvo/AAAAAAAAAAI/AAAAAAAAAAc/8GGsfiPhTlc/photo.jpg?sz=50" alt="Avatar" className="avatar" />
      </nav>
    </header>
  )
}

export default Nav;
