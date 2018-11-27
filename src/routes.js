import React from 'react'
import { Switch , Route } from "react-router-dom";
import Home from './components/Home';
import Explore from './components/Explore';

export default function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
  )
}
