import React from 'react';
import HeaderPA from '../HeaderPersonalArea';
import Menu from '../personalArea/menu';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Question1 from './Question1';
import Badge from '@material-ui/core/Badge';

import { createMuiTheme } from '@material-ui/core/styles';
import AddQuestionDialog from './addQuesytionDialog';

export default function EditSurveyPage() {
    const surveyId = localStorage.getItem('currentCreateSurvey');
    const [allQuestion, setAllQuestion] = React.useState([]);
    // alert(surveyId);
    const addNewQuestionHandler = (qustion) => {
        setAllQuestion([...allQuestion, qustion]);
    }

    return (
        <div>
            {/* <HeaderPA></HeaderPA>
            <Menu></Menu> */}
            <Container fixed style={{ display: 'flex', flexWrap: 'wrap' }}>
                {/* #7030a02b */}
                <div style={{ backgroundColor: 'rgb(207 232 252 / 55%)', height: '100vh', width: '60vw', margin: '0 auto' }}>
                    <div style={{ margin: 'auto' }}>
                        <AddQuestionDialog addNewQuestionHandler={addNewQuestionHandler}></AddQuestionDialog>
                        {/* <h1>edit</h1> */}
                        <Question1 questions={allQuestion}></Question1>
                    </div>
                </div>
                <i class="huge arrow alternate circle right icon" style={{ color: '#92D050', paddingTop: '12px' }}></i>
            </Container>

        </div>
    );
}

{/* <Typography maxWidth="sm" component="div" style={{ backgroundColor: 'rgb(207 232 252 / 55%)', height: '100vh', width: '60vw', margin: 'auto' }}> */ }
{/* </Typography> */ }