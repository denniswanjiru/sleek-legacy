import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router} from "react-router-dom";

import './index.scss';
import Nav from '../Nav';
import Sidebar from '../Sidebar';
import Player from '../Player';
import Routes from '../../routes';
import PlayerContext, { Consumer } from '../Contexts/PlayerContext';

const client = new ApolloClient({
   uri: 'http://localhost:5000/graphql'
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <PlayerContext>
          <Consumer>
            {(context) => (
              <React.Fragment>
                <div className={`page-wrapper ${context.lyric ? 'fixed' : ''}`}>
                  <div className="content">
                    <Nav context={context} />
                    <main className="main">
                      <Routes context={context} />
                    </main>
                  </div>
                  <Sidebar />
                </div>
                {context.playlist.name && <Player context={context}/>}
              </React.Fragment>
            )
            }
          </Consumer>
        </PlayerContext>
      </Router>
    </ApolloProvider>
  )
}