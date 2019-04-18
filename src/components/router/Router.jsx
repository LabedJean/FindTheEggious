import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import AleatoirEgg from '../aleatoirEgg/AleatoirEgg'


export default function Router() {
  return (
    <Switch>
      <Route path='/' component={HomePage} />
      <Route path='/aleatoirEgg' component={AleatoirEgg} />
    </Switch>
  );
}