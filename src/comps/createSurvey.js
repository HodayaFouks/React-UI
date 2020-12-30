import React, { Component } from 'react';
import axios from '../axios';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import './../App.css';
import './Components.css';
import { Link } from 'react-router-dom';
import BG1 from '../assets/BG1.PNG';
import Dashbord from './Dashbord';

class CreateSurvey extends Component {
    CU = JSON.parse(localStorage.getItem('currentUser'));
    CS = JSON.parse(localStorage.getItem('currentCreateSurvey'));
    state = {
        survey: {
            name: "",
            subject: "",
            createDate: "",
            surveyDirectorId: parseInt(this.CU['userId']),
            dateStart: "",
            dateEnd: "",
            hourEnd: "",
            showResult: "",
            status: "",
        }
    }

    inputChange = (event) => {
        const newSurvey = { ...this.state.survey };
        const id = event.target.id;
        newSurvey[id] = event.target.value;
        this.setState({ survey: newSurvey });
    }

    componentWillMount() {
        const newSurvey = { ...this.state.survey };
        newSurvey.name = this.CS['name'];
        newSurvey.subject = this.CS['subject'];
        newSurvey.dateStart = this.CS['dateStart'];
        newSurvey.dateEnd = this.CS['dateEnd'];
        newSurvey.hourEnd = this.CS['hourEnd'];
        this.setState({ survey: newSurvey });
    }

    newSurveyHandler = (survey) => {
        // debugger;
        // alert(JSON.stringify(survey));
        // axios.post('survey/CreateNewSurvey', survey).then(
        //     res => {
        //         localStorage.setItem('currentCreateSurvey', JSON.stringify(res.data));
        //     }).catch(err => {
        //         console.log("not good! :(");
        //     })
    }

    render() {
        return (
            //defaultValue={this.state.name}
            <div>
                {/* <Dashbord></Dashbord> */}
                <div className="surveyForm"  >
                    <Form style={{ marginTop: '-20vh' }}>
                        <Form.Field onChange={this.inputChange}>
                            <label className='l'>שם הסקר</label>
                            <input placeholder='שם הסקר' className='in' id='name' />
                        </Form.Field>
                        <Form.Field onChange={this.inputChange}>
                            <label className='l'>נושא</label>
                            <input placeholder='נושא' className='in' id='subject' />
                        </Form.Field>
                        <Form.Field onChange={this.inputChange}>
                            <label className='l'>תאריך פתיחת סקר</label>
                            <input placeholder='תאריך פתיחת סקר' className='in' type="date" id='dateStart' />
                        </Form.Field>
                        <Form.Field onChange={this.inputChange}>
                            <label className='l'>תאריך סגירת סקר</label>
                            <input placeholder='תאריך סגירת סקר' className='in' type="date" id='dateEnd' />
                        </Form.Field>
                        <Form.Field onChange={this.inputChange}>
                            <label className='l'>שעת סגירה</label>
                            <input placeholder='תאריך סגירת סקר' className='in' type="time" id='hourEnd' />
                        </Form.Field>
                        {/* <Form.Field >
                        <Checkbox label='I agree to the Terms and Conditions' className='in' />
                    </Form.Field> */}
                        <br></br>
                        <Link to="/EditSurveyPage"><Button type='submit' onClick={() => this.newSurveyHandler(this.state.survey)} style={{ marginRight: '6.5vw', color: '#7030A0', fontSize: '15px' }}><i class="big arrow alternate circle left icon" style={{ color: '#92D050' }}></i>המשך ביצירת הסקר</Button></Link>
                    </Form>
                </div>
            </div>
        )
    }
}


export default CreateSurvey;