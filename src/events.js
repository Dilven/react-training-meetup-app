import React from 'react';




const Events = (props) => {
    console.log(props);
    return (
        <ul>
        {props.events.map((event, index) => {
        
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

export default Events;