import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderPA from '../HeaderPersonalArea';
import SurveyCard from "../surveyCard";
import SimpleAccordion from '../segmentSurveys';
import Ssurveys from '../s_surveys';
import Menu from './menu';
import './PersonalArea.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

export default function MySurveyPage() {



    return (
        <div>
            <HeaderPA></HeaderPA>
            <div className="myContainer">
                <Menu screen="הסקרים שלי"></Menu>
                {/* <h3>{CU['userId']}</h3> */}
                {/* <h2>{userSurveys}</h2> */}
                {/* <p>{userSurveys[0]}</p> */}
                <Ssurveys screen="MySurveyPage" title="סקרים שנישלחו"></Ssurveys>
                {/* <SimpleAccordion></SimpleAccordion> */}
            </div>
        </div>
    );
}