import React from 'react';

const EventList = (props) => {
    
    return (
        <div>
            <ul>
                {props.events.map((event) => {
                
                    const date = new Date(event.date);

                    if(date >= Date.now() && event.name.indexOf(props.filter) > -1) {
                        return (
                            <li key={event.id}>
                                Nazwa: {event.name} <br />
                                Gdzie: {event.place} <br />
                                Data: {event.date} <br /> 
                                Godzina: {event.time} <br />
                                <button onClick={props.deleteEvent.bind(this, event.id)}>Usuń</button> <br /><br />
                            </li>
                        );
                    }
                })}
            </ul>
            <button onClick={props.onClickClear}>Wyczyść</button>
            <button onClick={props.showEvents}>Pokaz wszystkie wydarzenia</button>
        </div>
    ) 
}

export default EventList;