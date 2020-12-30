import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react'
import logo from '../assets/logo.png';
//import userProfile from '../assets/profile-user (1).png';
import '../Style/GlobalStyle.css';
import './personalArea/PersonalArea.css';
import profile from '../assets/profileUser.png';


class HeaderPA extends Component {
    exitUser = () => {
        debugger;
        localStorage.removeItem('currentUser');
    }

    state = {
        curTime: new Date().getHours().toLocaleString(),
    }


    TimeInDay = "";
    CU = JSON.parse(localStorage.getItem('currentUser'));


    render() {
        //"-1px -1px 13px 1px #000000b0 !important"
        console.log(process.env.PUBLIC_URL);
        const style = { width: "235px", height: "65px", marginLeft: "42px" }
        return (
            <Menu className='headerPA' style={{ boxShadow: "-0.5px -0.5px 10px 0.5px #7D7D7D !important" }}>
                <Link to={"/HomePage"}><img src={logo} style={style}></img></Link>
                <div className="topbar">
                    <label className="txt" style={{ padding: "15px", fontSize: "25px" }}>{"שלום, " + this.CU['userName']}</label>
                    <label href="http://localhost:3000/HomePage" onClick={this.exitUser} className="txt" style={{ padding: "15px", fontSize: "25px", color: "purple" }}>יציאה</label>
                </div>
                <img src={profile} style={{ width: "45px", height: "45px", marginTop: "12px" }}></img>
            </Menu>
        )
    }
}

export default HeaderPA;