import React, { Component } from 'react';
import { Link, useHistory, Router, Route } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
// import Header from '/comps/header';
import { Button } from 'semantic-ui-react';


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
                <h1>hello from homePage</h1>
                <Link to={"/CreateSurvey"}><Button color='teal' size='massive'>!צור סקר משלך</Button></Link>
                <Link to={"/PersonalArea"}><Button color='teal' size='massive'>!ענה כעת על סקר</Button></Link>
            </div>
        )
    }
}

export default HomePage;