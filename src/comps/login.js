import React, { Component } from 'react';
import axios from '../axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './../App.css';
import BG from '../assets/BG.png';

class Login extends Component {
    // history = useHistory();
    state = {
        user: {
            password: "",
            email: "",
        },
        errors: false,
    }

    inputChange = (event) => {
        const newUser = { ...this.state.user };
        const id = event.target.id;
        newUser[id] = event.target.value;
        this.setState({ user: newUser });
    }

    newUserHandler = (email, password) => {
        debugger;
        // axios.get('user/Login/{mail}/{pass}', email, password).then(
        //     res => {
        //         localStorage.setItem('currentUser', JSON.stringify(res.data));
        //     }).catch(err => {
        //         console.log("not good! :(");
        //     })
        var url = 'http://localhost:60572/api/user/Login/';
        var newUrl = url + email + '/' + password;
        axios.get(newUrl).then(
            res => {
                localStorage.setItem('currentUser', JSON.stringify(res.data));
                // if (localStorage.get('currentUser'))
                //     // history.push("/PersonalAreaPage");
            }).catch(err => {
                console.log("not good! :(");
            })
    }



    render() {
        return (
            <div>
                <Segment id="registerForm">
                    <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 400 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                <Image src='/Capture.png' /> Login your account
                    </Header>
                            <Form size='large'>
                                <Segment stacked>
                                    <Form.Input
                                        fluid
                                        icon='user'
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
                                    {/* {
                                    errors == false ? '' : <p>errors</p>
                                } */}
                                    <Button type="submit" color='teal' fluid size='large' onClick={() => this.newUserHandler(this.state.user.email, this.state.user.password)}>
                                        Login
                                </Button>
                                </Segment>
                            </Form>
                            <Message>
                                New to us?<Link to={"/SingUp"}>Sing Up</Link>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}


export default Login;
