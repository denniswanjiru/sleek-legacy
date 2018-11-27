import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './index.scss';
import Nav from '../Nav';
import Sidebar from '../Sidebar';
import Player from '../Player';
import Routes from '../../routes';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="page-wrapper">
          <div className="content">
            <Nav />
            <main className="main">
              <Routes />
            </main>
          </div>
          <Sidebar />
        </div>
        <Player />
      </React.Fragment>
    </Router>
  )
}