import React from 'react';
import events from './data/events.json';




const getEvents = () => {
    return (
        <ul>
        {events.map((event, index) => {
        
            const date = new Date(event.date);

            if(date >= Date.now()) {
                return (
                    <li key={index}>
                    Nazwa: {event.name} <br />
                    Gdzie: {event.place} <br />
                    Data: {event.date} <br />
                    Godzina: {event.time} <br /> <br />
                    </li>
                );
            }
        })}
    </ul>
)};

export default getEvents;