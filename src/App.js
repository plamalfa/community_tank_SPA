import React from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import Homepage from './pages/Homepage';
import GettingStarted from './pages/GettingStarted';
=======
import HomePage from './pages/HomePage';
import About from './pages/About';
>>>>>>> 56185e96dcf11440d1048f5a8bddfeb5f5cf94ec
import Species from './pages/Species';
import IndividualSpecies from './pages/IndividualSpecies';
import './App.css';

export default function App() {
  return (
    <Switch>
<<<<<<< HEAD
      <Route exact path="/" component={Homepage} />
      <Route exact path="/gettingStarted" component={GettingStarted} />
      <Route exact path="/species" component={Species} />
      <Route exact path="/species/:id" component={IndividualSpecies} />
=======
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/species" component={Species} />
      <Route exact path="/species:id" component={IndividualSpecies} />
>>>>>>> 56185e96dcf11440d1048f5a8bddfeb5f5cf94ec
    </Switch>
  );
};
