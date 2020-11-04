import React, { Component } from 'react';
import axios from '../axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './../App.css';

class SingUp extends Component {
    state = {
        user: {
            userName: "",
            email: "",
            password: "",
        }
    }

    inputChange = (event) => {
        const newUser = { ...this.state.user };
        const id = event.target.id;
        newUser[id] = event.target.value;
        this.setState({ user: newUser });
    }

    newUserHandler = (user) => {
        debugger;
        axios.post('user/SingUp', user).then(console.log("succesfull !!!"));
    }
    render() {
        return (
            <Segment id="registerForm">
                <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 400 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='/Capture.png' /> Create your account
                    </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Your name'
                                    id="userName"
                                    onChange={this.inputChange}
                                />
                                <Form.Input
                                    fluid
                                    icon='envelope'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    id="email"
                                    onChange={this.inputChange}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    id="password"
                                    onChange={this.inputChange}
                                />
                                <Button type="submit" color='teal' fluid size='large' onClick={() => this.newUserHandler(this.state.user)}>
                                    Sing Up
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            Already registered? <Link to={"/Login"}>Login</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}


export default SingUp
