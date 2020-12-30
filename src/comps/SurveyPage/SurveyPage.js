import React from 'react';
import HeaderPA from '../HeaderPersonalArea';
import Menu from '../personalArea/menu';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

export default function SurveyPage(route) {
    const surveyId = localStorage.getItem('currentCreateSurvey');
    const otherParam = route ? route.otherParam : null;
    console.log(otherParam);
    // alert(surveyId + " " + otherParam);

    return (
        <div>
            {/* <HeaderPA></HeaderPA>
            <Menu></Menu> */}
            <Container fixed>
                <h1>finish edit</h1>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </div>
    );
}