import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import GettingStarted from './pages/GettingStarted';
import Species from './pages/Species';
import IndividualSpecies from './pages/IndividualSpecies';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/gettingStarted" component={GettingStarted} />
      <Route exact path="/species" component={Species} />
      <Route exact path="/species/:id" component={IndividualSpecies} />
    </Switch>
  );
};
