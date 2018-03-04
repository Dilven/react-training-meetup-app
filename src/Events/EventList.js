import React from 'react';
import Details from '../Details.js';
import {
    Route,
    Link
  } from 'react-router-dom'
  

const EventList = (props) => {
    
    return (
        <div>
            <Link to={"/about"}>Co to za strona?</Link>
            <ul>
                {props.events.map((event) => {
            
                    const date = new Date(event.date);
            
                    if(date >= Date.now() && event.name.indexOf(props.filter) > -1) {
                        return (
                            <li key={event.id}>
                                Nazwa: {event.name} <br />
                                <button onClick={props.deleteEvent.bind(this, event.id)}>Usuń</button>
                                <button><Link to={'/details/'+ event.id}>Szczegóły</Link></button> 
                                <br />
                            </li>
                        );
                    } else return false;
                })}
            </ul>
            <Route path="/details/:itemId" component={Details} />
            <button onClick={props.onClickClear}>Wyczyść</button>
            <button onClick={props.showEvents}>Pokaz wszystkie wydarzenia</button>
        </div>
    ) 
}

export default EventList;