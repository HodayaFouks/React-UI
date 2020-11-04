import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import './../App.css';


class CreateSurvey extends Component {
    render() {
        return (
            <div class="surveyForm">
                <Form>
                    <Form.Field>
                        <label>שם הסקר</label>
                        <input placeholder='שם הסקר' />
                    </Form.Field>
                    <Form.Field>
                        <label>נושא</label>
                        <input placeholder='נושא' />
                    </Form.Field>
                    <Form.Field>
                        <label>תאריך פתיחת סקר</label>
                        <input placeholder='תאריך פתיחת סקר' />
                    </Form.Field>
                    <Form.Field>
                        <label>תאריך סגירת סקר</label>
                        <input placeholder='תאריך סגירת סקר' />
                    </Form.Field>
                    <Form.Field>
                        <label>שיתוף בעריכה</label>
                        <input placeholder='שיתוף בעריכה' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>צור סקר</Button>
                </Form>
            </div>
        )
    }
}


export default CreateSurvey;