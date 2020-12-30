import React from 'react';
import Button from '@material-ui/core/Button';


export default function Question1(props) {
    const getOptionsToRender = (options) => {
        const optionsToRender = [];
        options.map(option => {
            optionsToRender.push(
                <React.Fragment>
                    <Button variant="contained" style={{ backgroundColor: 'rgb(255 121 18 / 70%)', margin: 'auto', width: '42vw', height: '35px', fontSize: '3vh', fontFamily: "Calibri", color: 'white' }}>
                        {option}
                    </Button><br></br>
                </React.Fragment>
            );
        });
        return optionsToRender;
    }

    const getQuestionsToRender = () => {
        const questionsToRender = [];
        props.questions && props.questions.map(question => {
            questionsToRender.push(
                <React.Fragment>
                    <div class="ui attached message" style={{ backgroundColor: '#7030a0c2', height: '45px' }}>
                        <div class="header">
                            {question.title}
                        </div>
                        {/* <p>Fill out the form below to sign-up for a new account</p> */}
                    </div>

                    <form class="ui form attached fluid segment" style={{ display: 'grid' }}>
                        <br></br>
                        {getOptionsToRender(question.options)}
                        <br></br><br></br>
                    </form>
                    <div class="ui bottom attached warning message" style={{ height: '6.5vh', backgroundColor: '#92d050ad', border: '1px solid #92d050a1', boxShadow: '0 0 7px 0px #b5cc1894 inset', backgroundColor: 'white' }}>
                        <div style={{ display: 'table', margin: '0 auto', color: 'black' }}><i class="large trash icon"></i>&ensp;<i class="large edit icon"></i></div>
                    </div>
                </React.Fragment>
            );
        });
        return questionsToRender;
    }
    return (
        <div style={{ width: '46vw', margin: 'auto' }}>
            {getQuestionsToRender()}
            {/* <div class="ui attached message" style={{ backgroundColor: '#7030a0c2', height: '45px' }}>
                <div class="header">
                    שאלה
            </div>
               
            </div>

            <form class="ui form attached fluid segment" style={{ display: 'grid' }}>
                <br></br>
                <Button variant="contained" style={{ backgroundColor: 'rgb(255 121 18 / 70%)', margin: 'auto', width: '42vw', height: '35px', fontSize: '3vh', fontFamily: "Calibri", color: 'white' }}>
                    תשובה 1
                </Button><br></br>
                <Button variant="contained" style={{ backgroundColor: 'rgb(255 121 18 / 70%)', margin: 'auto', width: '42vw', height: '35px', fontSize: '3vh', fontFamily: "Calibri", color: 'white' }}>
                    תשובה 2
                </Button><br></br>
            </form> */}
            {/* <div class="ui bottom attached warning message" style={{ height: '6.5vh', backgroundColor: '#92d050ad', border: '1px solid #92d050a1', boxShadow: '0 0 7px 0px #b5cc1894 inset', backgroundColor: 'white' }}>
                <div style={{ display: 'table', margin: '0 auto', color: 'black' }}><i class="large trash icon"></i>&ensp;<i class="large edit icon"></i></div>
            </div> */}
        </div>
    );
}