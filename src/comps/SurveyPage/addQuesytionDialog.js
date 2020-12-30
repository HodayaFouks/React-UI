import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import '../../Style/GlobalStyle.css';
import { TextField } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import '../Components.css';


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const AddQuestionDialog = (props) => {
    const [open, setOpen] = React.useState(false);
    const [optionsLength, setOptionsLength] = React.useState(3);
    const question = {
        title: '',
        options: []
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        //props.addNewQuestionHandler(question);
    };

    const close = () => {
        setOpen(false);
        props.addNewQuestionHandler(question);
    };


    const addInput = () => {

    }
    const inputChange = (e, attribute, optionIndex) => {
        if (optionIndex) {
            if (question[attribute][optionIndex]) {
                question[attribute][optionIndex] = e.target.value;
            }
            else {
                question[attribute].push(e.target.value);
            }
        } else {
            question[attribute] = e.target.value;
        }
    }

    const getOptions = () => {
        const optionsToRender = [];
        for (var i = 1; i <= optionsLength; i++) {
            optionsToRender.push(<div class="field" style={{ display: 'flex' }}><input onKeyUpCapture={(e) => inputChange(e, 'options', i)} type="text" placeholder={`אפשרות ${i}`} className='ind' style={{ width: '500px', margin: '0 auto' }}></input><p style={{ margin: 'auto', color: '#FF7912', fontSize: 'x-large' }}>&#9733;</p></div>);
        }
        return optionsToRender;
    }

    return (
        <div>
            <Badge color="secondary" badgeContent="+" anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }} style={{}}>
                <Button variant="contained" style={{ backgroundColor: '#7030A0', width: '250px', height: '55px', fontSize: '20px', fontFamily: "Calibri", color: 'white', fontSize: '1.7rem' }} onClick={handleClickOpen}>
                    הוספת שאלה
             </Button>
            </Badge>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                {/* <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{ margin: 'auto' }}>
                    הוספת שאלה
                </DialogTitle> */}
                <DialogActions style={{ backgroundColor: '#7030a0c2', height: '52px' }}>
                    <label autoFocus onClick={handleClose} color="primary" style={{ margin: 'auto', font: 'menu', fontSize: '19px', color: 'white' }}>
                        הוספת שאלה
                        </label>
                </DialogActions>
                <DialogContent dividers>
                    <div class="ui form" style={{ margin: '0 auto', display: 'table' }}>
                        <div class="field"> <input onChange={(e) => inputChange(e, 'title')} type="text" placeholder="הכנס שאלה" className='ind' style={{ width: '540px', margin: '0 auto', display: 'block' }}></input></div><br></br>
                        {getOptions()}
                        {/* <div class="field" style={{ display: 'flex' }}><input type="text" placeholder="אפשרות 1" className='ind' style={{ width: '500px', margin: '0 auto' }}></input><p style={{ margin: 'auto', color: '#FF7912', fontSize: 'x-large' }}>&#9733;</p></div>
                        <div class="field" style={{ display: 'flex' }}><input type="text" placeholder="אפשרות 2" className='ind' style={{ width: '500px', margin: '0 auto' }}></input><p style={{ margin: 'auto', color: '#FF7912', fontSize: 'x-large' }}>&#9733;</p></div>
                        <div class="field" style={{ display: 'flex' }}><input type="text" placeholder="אפשרות 3" className='ind' style={{ width: '500px', margin: '0 auto' }}></input><p style={{ margin: 'auto', color: '#FF7912', fontSize: 'x-large' }}>&#9733;</p></div> */}
                        <div style={{ marginLeft: '500px' }}><AddBoxIcon fontSize="large" style={{ color: 'rgb(0 0 0 / 74%)' }} onClick={() => addInput()}></AddBoxIcon></div>
                        {/* <div style={{ margin: 'auto' }}><i class="trash icon"></i> <i class="edit icon"></i></div> */}
                    </div>
                </DialogContent>

                {/* <DialogContent dividers>
                    <Typography gutterBottom>
                        <div class="field"> <input type="text" placeholder="הכנס שאלה" className='in'></input></div>
                    </Typography>
                    <Typography gutterBottom>
                        <div class="field"> <input type="text" placeholder="אפשרות 1" className='in'></input></div>
                    </Typography>
                    <Typography gutterBottom>
                        <div class="field"> <input type="text" placeholder="2 אפשרות" className='in'></input></div>
                    </Typography>
                </DialogContent> */}
                <DialogActions style={{ backgroundColor: '#92d050ad' }}>
                    <Button autoFocus onClick={close} color="primary" style={{ margin: 'auto', font: 'menu', fontSize: '14px', color: 'black', fontWeight: 'bold' }}>
                        הוסף שאלה
                    </Button>
                </DialogActions>
            </Dialog >
        </div >
    );
}
export default AddQuestionDialog;