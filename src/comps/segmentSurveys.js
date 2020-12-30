import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SurveyCard from './surveyCard';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion >
                <AccordionSummary style={{ marginLeft: "88.2vw" }}
                    // expandIcon={ }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading} style={{ fontSize: "20px" }}>סקרים בעריכה</Typography>
                    <ExpandMoreIcon style={{ color: "purple" }} />
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ display: "contents", position: "absolute", backgroundColor: 'lightseagreen' }}>
                        <div style={{ display: "contents", width: '100vw', position: "absolute", backgroundColor: 'lightseagreen' }}>
                            <SurveyCard ></SurveyCard>
                            <SurveyCard></SurveyCard>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary style={{ marginLeft: "88.2vw" }}
                    //expandIcon={}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading} style={{ fontSize: "20px" }}>סקרים שנשלחו</Typography>
                    <ExpandMoreIcon />
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <SurveyCard></SurveyCard>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion> */}
        </div>
    );
}