import React from 'react';
import './App.css';
import Header from './comps/header';
import SingUp from './comps/singUp';
import Login from './comps/login';
import { Link, Route, Switch } from 'react-router-dom';
import CreateSurvey from './comps/createSurvey';
import HomePage from './comps/homePage';
import PersonalArea from './comps/personalArea';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/SingUp" component={SingUp} />
        <Route path="/CreateSurvey" component={CreateSurvey} />
        <Route path="/PersonalArea" component={PersonalArea} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

