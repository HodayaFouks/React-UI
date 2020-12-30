import React from 'react';
import { Link } from 'react-router-dom';
import plus from '../../assets/plus.png';
import contact from '../../assets/contact.png';
import get from '../../assets/get.png';
import statistic from '../../assets/statistic.png';
import mySurveys from '../../assets/mySurveys.png';
import './PersonalArea.css';


export default function Menu(props) {


    return (
        <div id="subHeader">
            <h1 className="txt" style={{ fontSize: "43px", position: "right", float: "right", marginRight: "53px" }}>{props.screen}</h1>
            <div id="menu">
                <Link to="/CreateNewSurvey"><img src={plus} className="submenuButten"></img></Link>
                <Link to="/Contacts"><img src={contact} className="submenuButten"></img></Link>
                <Link to="/RecivedSurveys"><img src={get} className="submenuButten"></img></Link>
                <Link to="/Results"><img src={statistic} className="submenuButten"></img></Link>
                <Link to="/MySurveys"><img src={mySurveys} className="submenuButten"></img></Link>
            </div>
        </div>
    );
}