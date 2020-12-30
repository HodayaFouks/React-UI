import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Scard from '../assets/Scard.png';
import { button } from 'semantic-ui-react'
import surveyFile from '../assets/file (1).png';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles({
    root: {
        width: '230px',
        height: '300px',
        // padding: '5.7px',
        borderRadius: '13px',
        boxShadow: '4px 4px 8px 0px #76767682',
    },
});


export default function SurveyCard(props) {
    // בפרופס מגיע גם טייפ-אם בעריכה או נשלח. גם אם צריך להציג מי היוצר, וגם אם אפשר לראות תוצאות
    //props: screen, type, name
    const classes = useStyles();
    var cts = props.timeEnd;
    const history = useHistory();
    if (cts != null)
        var cdate = (new Date(cts)).toLocaleDateString();
    else
        cdate = ""


    function toSurveyPage(SId) {

        alert(SId);
        props.type == "edit" ? history.push("/EditSurveyPage/" + SId) : history.push("/SurveyPage/" + SId);

    }

    return (
        <Card className={classes.root} style={{ margin: "15px" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={Scard}
                    height='110px'
                    width='120px'
                    margin='auto'
                    margin-top='6px'

                />
                <CardContent style={{ padding: "20px 17px 20px 20px" }}>
                    {/* <h3 style={{ marginTop: "-1.5vh" }}>שם הסקר</h3>
                    <h4 style={{ marginTop: "-2.7vh" }}>נושא</h4> */}
                    <Typography gutterBottom variant="h5" component="h4" style={{ marginTop: "-1.5vh" }}>
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: "-1.7vh", fontSize: "15.5px" }}>
                        {props.subject}
                    </Typography>
                    <Typography style={{ paddingTop: '12px' }}>
                        {props.screen == "RecivedSurveys" ? <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: "3px", marginRight: '-9px', fontSize: "13.5px", marginBottom: '-16px' }}>
                            יוצר הסקר:
                      <i class="user icon" style={{ float: 'right' }}></i>
                        </Typography> : <></>}
                        <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: "20px", marginRight: '-9px', fontSize: "13.5px" }}>
                            <i class="calendar alternate icon" style={{ float: 'right' }}></i>
                        תאריך סגירה:<br></br>{cdate}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: '14px', paddingTop: '4px' }}>
                        <Typography style={{ paddingTop: "13px", height: "100%" }}>
                            {props.type == "edit" ? <button class="ui active button" style={{ width: "140px", height: "25px", marginRight: "0.5vw", fontSize: "14px", paddingTop: "5px", textAlign: 'auto' }} > המשך בעריכה</button> : <></>}
                            {props.screen == "RecivedSurveys" ? <button class="ui active button" style={{ width: "140px", height: "25px", marginRight: "0.5vw", fontSize: "14px", paddingTop: "5px", textAlign: 'auto' }}> ענה כעת</button> : <></>}
                            <img src={surveyFile} style={{ width: "30px", float: "left" }} onClick={() => toSurveyPage(props.surveyId)}></img>
                        </Typography>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                    ענה כעת
                </Button> */}
            </CardActions>

        </Card >
    );
}