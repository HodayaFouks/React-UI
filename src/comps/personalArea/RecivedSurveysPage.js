import React from 'react';
import HeaderPA from '../HeaderPersonalArea';
import Ssurveys from '../s_surveys';
import Menu from './menu';
import './PersonalArea.css';

export default function RecivedSurveysPage() {
    return (
        <div class="myContainer">
            <HeaderPA></HeaderPA>
            <Menu screen="סקרים שנשלחו אלי"></Menu>
            {/* <h3>{CU['userId']}</h3> */}
            {/* <h2>{userSurveys}</h2> */}
            {/* <p>{userSurveys[0]}</p> */}
            <Ssurveys screen="RecivedSurveys" title="סקרים שנשלחו אלי"></Ssurveys>
            {/* <SimpleAccordion></SimpleAccordion> */}
        </div>
    );
}