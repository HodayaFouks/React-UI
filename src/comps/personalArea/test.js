
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderPA from '../HeaderPersonalArea';
import SurveyCard from "../surveyCard";
import SimpleAccordion from '../segmentSurveys';
import Ssurveys from '../s_surveys';
import Menu from './menu';
import './PersonalArea.css';
import b from '../../assets/b.jpg';

export default function Test() {



    return (
        <div style={{ backgroundImage: `url(${b})`, width: '100%', height: '20vh' }}>
            <div class="myContainer" >
                <HeaderPA></HeaderPA>
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