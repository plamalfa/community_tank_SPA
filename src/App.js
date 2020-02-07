import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Species from './pages/Species';
import IndividualSpecies from './pages/IndividualSpecies';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/species" component={Species} />
      <Route exact path="/species:id" component={IndividualSpecies} />
    </Switch>
  );
};
