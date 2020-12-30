import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react'
import logo from '../assets/logo.png';

class Header extends Component {
    render() {
        return (
            <Menu>
                <Link to={"/HomePage"}><img src={logo} style={{ width: "235px", height: "65px" }}></img></Link>
                <Menu.Item>
                    <Link to={"/Login"}><Button style={{ marginLeft: "68.3vw" }}>התחברות</Button></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={"/SingUp"}><Button color='teal' >הרשמה</Button></Link>
                </Menu.Item>
            </Menu>


        )
    }
}

export default Header;