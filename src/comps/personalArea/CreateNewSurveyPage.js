import React from 'react';
import HeaderPA from '../HeaderPersonalArea';
import CreateSurvey from '../createSurvey';
import Menu from './menu';
import BG1 from '../../assets/BG1.PNG'

export default function CreateNewSurveyPage() {
    return (
        <div style={{ backgroundImage: `url(${BG1})`, backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw' }}>
            <HeaderPA></HeaderPA>
            <Menu></Menu>
            <CreateSurvey></CreateSurvey>
        </div>
    );
}