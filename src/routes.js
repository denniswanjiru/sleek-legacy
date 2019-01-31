import React from 'react'
import { Switch , Route } from "react-router-dom";
import Home from './components/Home';
import Explore from './components/Explore';
import Search from './components/Search';

export default function Routes(context) {
  return (
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} context={context}/>} />
        <Route exact path="/explore" component={(props) => <Explore context={context} {...props} />} />
        <Route exact path="/search" component={(props) => <Search context={context} {...props} />} />
      </Switch>
  )
}
