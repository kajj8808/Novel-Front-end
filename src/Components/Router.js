import React , {useContext} from "react";
import { UserContext } from "context";

import { BrowserRouter as Router , Route } from "react-router-dom";

import Home from "Routes/Home";
import SignIn from "Routes/SignIn";
import New from "Routes/New"
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return (
        <Router>
            <Route path = "/" exact component={Home} />
            <Route path="/new" exact component={New} />
            <Route path="/signin" exact component={SignIn} />
        </Router>
    )
}