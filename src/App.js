import React from 'react';
import Events from './Events/events.js';
import Settings from './Settings.js';
import Login from './Login.js';


import {
    BrowserRouter as Router,Route, NavLink, Switch
} from 'react-router-dom';


const App = (props) => {

    const styleSideBar = {
        fontWeight: 'bold',
        color: 'black'
    }

    return (
        <Router>
            <div>
                <ul>
                    <li><NavLink exact to={'/'} activeStyle={styleSideBar}>Strona domowa</NavLink></li>
                    <li><NavLink to={'/about'} activeStyle={styleSideBar}> O stronie </NavLink></li>
                    <li><NavLink to={'/settings'} activeStyle={styleSideBar}> Ustawienia </NavLink></li>
                    <li><NavLink to={'/login'} activeStyle={styleSideBar}> Zaloguj </NavLink></li>
                </ul>
                <Switch>
                <Route path={"/login"} component={Login}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/about" render={() => <p> O stroniee</p>}/>
                <Route path="/" component={Events}/>
                <Route render={()=> <p>Not Found, Błąd 404! </p>}/>
                </Switch>  
            </div>
        </Router>
    )
}

export default App;