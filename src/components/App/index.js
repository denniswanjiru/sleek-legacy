import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router} from "react-router-dom";

import './index.scss';
import Nav from '../Nav';
import Sidebar from '../Sidebar';
import Player from '../Player';
import Routes from '../../routes';
import { HttpLink, InMemoryCache } from 'apollo-boost';
import NPContext, { Consumer } from '../Contexts/NPContext';

const client = new ApolloClient({
   uri: 'http://localhost:5000/graphql'
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NPContext>
          <Consumer>
            {(context) => (
              <React.Fragment>
                <div className="page-wrapper">
                  <div className="content">
                    <Nav />
                    <main className="main">
                      <Routes context={context} />
                    </main>
                  </div>
                  <Sidebar />
                </div>
                <Player context={context}/>
              </React.Fragment>
            )
            }
          </Consumer>
        </NPContext>
      </Router>
    </ApolloProvider>
  )
}