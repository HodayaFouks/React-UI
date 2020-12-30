import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import SurveyCard from './surveyCard';
import '../Style/GlobalStyle.css';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function Ssurveys(props) {
    //props: title, screen
    //בפרופס מתקבל מאיזה עמוד הגענו ולפי זה מביא את האקורדיון
    // var wichPage = props.screen;
    var CU = JSON.parse(localStorage.getItem('currentUser'));
    //שליפת הסקרים שעדיין בעריכה של המשתמש
    const [editSurveys, setEditSurveys] = useState([]);
    //שליפת  הסקרים שנשלחו של המשתמש
    const [sendSurveys, setSendSurveys] = useState([]);

    function getblabla() {
        console.log(sendSurveys);
    }

    useEffect(() => {
        axios.get(`http://localhost:60572/api/survey/GetSurveyByDirectorId/${parseInt(CU['userId'])}`).then(res => {
            //debugger
            console.log("useEffect");
            const data = [...res.data];
            setSendSurveys(data);
            //console.log(sendSurveys);
        }
        )
        axios.get(`http://localhost:60572/api/survey/GetEditSurveyByDirectorId/${parseInt(CU['userId'])}`).then(res => {
            console.log("useEffect");
            // var res1 = [...res]
            const data = [...res.data];
            setEditSurveys(data);
            //console.log(data);
        }
        )
    }, [])

    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState('panel2');
    const handleChange1 = (panel) => (event, newExpanded) => {
        setExpanded1(newExpanded ? panel : false);
    };
    const handleChange2 = (panel) => (event, newExpanded) => {
        setExpanded2(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion square expanded={expanded1 === 'panel1'} onChange={handleChange1('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="shadow" >
                    <Typography style={{ marginLeft: "86%", fontSize: "22px", fontFamily: 'Calibri' }} >{props.title}</Typography>
                    <i class="big caret left icon" style={{ margin: "auto", marginLeft: "1px" }}></i>
                </AccordionSummary>
                <AccordionDetails style={{ direction: 'rtl', margin: "0 20px 0 20px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
                    <Typography style={{ display: "contents", position: "absolute" }}>
                        {sendSurveys.map((item, index) => {
                            return <SurveyCard key={index} surveyId={item.id} name={item.name} subject={item.subject} timeEnd={item.dateEnd} type="send" screen={props.screen}></SurveyCard>
                        })}
                        {/* <SurveyCard type="send" screen={props.screen}></SurveyCard>
                        <SurveyCard type="send" screen={props.screen}></SurveyCard>
                        <SurveyCard type="send" screen={props.screen}></SurveyCard> */}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* <br></br> */}
            {props.screen == "MySurveyPage" ?
                <Accordion square2 expanded={expanded2 === 'panel2'} onChange={handleChange2('panel2')} style={{ marginTop: "10px" }} >
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" className="shadow">
                        <Typography style={{ marginLeft: "86.6%", fontSize: "22px", fontFamily: 'Calibri' }}>סקרים בעריכה</Typography>
                        <i class="big caret left icon" style={{ margin: "auto", marginLeft: "1px" }}></i>
                    </AccordionSummary>
                    <AccordionDetails style={{ direction: 'rtl', margin: "0 20px 0 20px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
                        <Typography style={{ display: "contents", position: "absolute" }}>
                            {editSurveys.map((item, index) => {
                                return <SurveyCard key={index} surveyId={item.id} name={item.name} subject={item.subject} timeEnd={item.dateEnd} type="edit"></SurveyCard>
                            })}
                            {/* <SurveyCard type="edit"></SurveyCard>
                            <SurveyCard type="edit"></SurveyCard>
                            <SurveyCard type="edit"></SurveyCard> */}
                        </Typography>
                    </AccordionDetails>
                </Accordion> : <div></div>}
        </div >
    );
}