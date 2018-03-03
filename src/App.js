import React from 'react';
import Events from './Events/events.js';
import About from './About.js';
import Details from './Details';


import {
    BrowserRouter as Router,Route, NavLink
} from 'react-router-dom';


const App = (props) => {


    return (
        <Router>
            <div>
                <ul>
                    <li><NavLink exact to={'/'} activeStyle={{fontWeight: 'bold', color: 'black'}}>Strona domowa</NavLink></li><br />
                    <li><NavLink to={'/about'} activeStyle={{fontWeight: 'bold', color: 'black'}}> O stronie </NavLink></li>
                </ul>
                <Route exact path="/" component={Events}/>
                <Route path="/about" render={() => <p> O stroniee</p>}/>
                <Route path="/details/:itemId" component={Details}/>
            </div>
        </Router>
    )
}

export default App;