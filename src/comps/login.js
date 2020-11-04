import React, { Component } from 'react';
import axios from '../axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './../App.css';

class Login extends Component {
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
        axios.get('user/Login/{mail}/{pass}', email, password).then(console.log("succesfull !!!"));
        // try {
        //     axios.post('user/Login', user).then(res => {
        //         if (res == null) {
        //             this.setState({...this.state, errors: true})
        //         } else {
        //             localStorage.setItem("currentUser", JSON.stringify(res));
        //         }
        //     });
        // } catch (e) {
        //     console.log("error")
        // }

    }

    render() {
        return (
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
        )
    }
}


export default Login;
