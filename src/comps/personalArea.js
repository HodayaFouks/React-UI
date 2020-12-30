import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
//import { Book } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import contacts from '../assets/contacts.png';
import createNewsurvey from '../assets/createNewsurvey.png';
import mySurvey from '../assets/mySurvey.png';
import recived from '../assets/recived.png';
import statistics from '../assets/statistics.png';
import { TextareaAutosize } from '@material-ui/core';

import plus from '../assets/plus.png';
import contact from '../assets/contact.png';
import get from '../assets/get.png';
import statistic from '../assets/statistic.png';
import mySurveys from '../assets/mySurveys.png';
//
import HeaderPA from './HeaderPersonalArea';

const images = [
    {
        url: contact,
        title: 'ניהול אנשי קשר',
        width: '180px',
        path: "/Contacts",
    },
    {
        url: plus,
        title: 'יצירת סקר חדש',
        width: '180px',
        path: "/CreateNewSurvey",
    },
    {
        url: mySurveys,
        title: 'הסקרים שלי',
        width: '180px',
        path: "/MySurveys",
    },
    {
        url: get,
        title: 'סקרים שנישלחו אלי',
        width: '180px',
        path: "RecivedSurveys",
    },
    {
        url: statistic,
        title: 'תוצאות הסקרים שלי',
        width: '180px',
        path: "Results",
    },
];

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '85%',
        margin: 'auto',
        // align: 'right',
        dir: 'rtl',
        //marginTop: '0%',
        //margin: '5px',
        //marginLeft: '109px',
    },
    container: {
        marginTop: '75px',
    },
    image: {
        position: 'relative',
        height: 100,
        margin: '10px',
        width: '300',
        // marginright: '75px',
        //marginleft: '50px',
        //marginbottom: 'unset',

        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,

        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 2,
        right: 3,
        top: 6,
        bottom: 4,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
        border: 'solid',
        borderRadius: '10%',
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        fontSize: '22px'
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));


export default function PersonalArea() {
    const classes = useStyles();
    return (
        <div>
            <HeaderPA></HeaderPA>
            <div className={classes.root}>
                <Grid container className={classes.container}>

                    {images.map((image) => (
                        <Grid item xs={3}>
                            <ButtonBase
                                component={Link}
                                to={image.path}
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: 250,
                                    height: 285,
                                }}
                            >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${image.url})`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        {image.title}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                        </Grid>
                    ))}

                </Grid>
            </div>
        </div>
    );
}
