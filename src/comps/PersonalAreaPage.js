import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';

import plus from '../assets/plus.png';
import contact from '../assets/contact.png';
import get from '../assets/get.png';
import statistic from '../assets/statistic.png';
import mySurveys from '../assets/mySurveys.png';
//
import HeaderPA from './HeaderPersonalArea';


export default function PersonalAreaPage() {
    return (
        <div>
            <HeaderPA></HeaderPA>
            <div class="parent">
                <div class="div1"><Link to="/CreateNewSurvey"><img src={plus} className="menuButten"></img></Link> </div>
                <div class="div2"><Link to="/Contacts"><img src={contact} className="menuButten"></img></Link> </div>
                <div class="div3"><Link to="/RecivedSurveys"><img src={get} className="menuButten"></img></Link> </div>
                <div class="div4"><Link to="/Results"><img src={statistic} className="menuButten"></img></Link> </div>
                <div class="div5"><Link to="/MySurveys"><img src={mySurveys} className="menuButten"></img></Link> </div>
            </div>
        </div>
    );
}




