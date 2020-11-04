import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react'

class Header extends Component {
    render() {
        return (
            <Menu>
                <Menu.Item >
                    <Link to={"/SingUp"}><Button color='teal'>Sign up</Button></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={"/Login"}><Button>Log-in</Button></Link>
                </Menu.Item>
                {/* <img src={process.env.PUBLIC_URL + "/Capture.png"} ></img> */}
            </Menu>
        )
    }
}

export default Header;