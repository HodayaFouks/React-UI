import React, { Component } from 'react';
import { Link, useHistory, Router, Route } from 'react-router-dom';
import Header from './header';
// import Header from '/comps/header';
import { Button } from 'semantic-ui-react';
import homePage from '../assets/homePage.jpg';
import ResisterForm from './RegisterForm';



class HomePage extends Component {

    // routeChange = () => {
    //     this.props
    // }
    // routeChange = () => {
    //     if (localStorage.getItem("currentUser")) {
    //         return <Router>
    //             <Route path="/CreateSurvey" component={CreateSurvey} />
    //         </Router>
    //     }
    // }

    render() {
        return (
            <div>
                <Header></Header>
                {/* <img src={homePage} style={{ width: "100vw", height: "150vh" }}></img> */}
                <ResisterForm></ResisterForm>
                <Link to={"/CreateSurvey"}><Button color='teal' size='massive'>!צור סקר משלך</Button></Link>
                <Link to={"/PersonalAreaPage"}><Button color='teal' size='massive'>!ענה כעת על סקר</Button></Link>
            </div>
        )
    }
}

export default HomePage;