import React from 'react';
import './App.css';
import Header from './comps/header';
import SingUp from './comps/singUp';
import Login from './comps/login';
import { Link, Route, Switch } from 'react-router-dom';
import CreateSurvey from './comps/createSurvey';
import HomePage from './comps/homePage';
import PersonalArea from './comps/personalArea';
import ContactsPage from './comps/personalArea/ContactsPage';
import ResultsPage from './comps/personalArea/ResultsPage';
import RecivedSurveysPage from './comps/personalArea/RecivedSurveysPage';
import MySurveyPage from './comps/personalArea/MySurveyPage';
import CreateNewSurveyPage from './comps/personalArea/CreateNewSurveyPage';
import Test from './comps/personalArea/test';
//import HomePage from './comps/RegisterForm';
import SignUpSide from './comps/SignUpForm';
import EditSurveyPage from './comps/SurveyPage/EditSurveyPage';
import SurveyPage from './comps/SurveyPage/SurveyPage';
import PersonalAreaPage from './comps/PersonalAreaPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/SingUp" component={SingUp} />
        <Route path="/SignUpForm" component={SignUpSide} />
        <Route path="/CreateSurvey" component={CreateSurvey} />
        <Route path="/PersonalArea" component={PersonalArea} />
        <Route path="/PersonalAreaPage" component={PersonalAreaPage} />
        {/* <Route path="/PersonalAreaPage" component={SignInSide} /> */}
        <Route path="/Contacts" component={ContactsPage} />
        <Route path="/Results" component={ResultsPage} />
        <Route path="/RecivedSurveys" component={RecivedSurveysPage} />
        <Route path="/MySurveys" component={MySurveyPage} />
        {/* <Route path="/MySurveys" component={Test} /> */}
        <Route path="/CreateNewSurvey" component={CreateNewSurveyPage} />
        <Route path="/EditSurveyPage" component={EditSurveyPage} />
        <Route path="/EditSurveyPage/:id" component={EditSurveyPage} />
        <Route path="/SurveyPage/:id" component={SurveyPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

