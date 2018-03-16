import React from 'react';

const AddEvent = (props) => {
    return(
        <div>
            Dodawanie nowego wydarzenia <br />
            <form onSubmit={props.onAddEvent}>
                <input id="name" type="text" placeholder="nazwa wydarzenia" onChange={props.onInputNewEvent.bind(this,'newEventName')} value={props.newEventName}></input><br />
                <label style={props.newEventNameValid ? {display:'none'}: {display: 'inline'}} htmlFor="name">Pole jest wymage!</label><br />
                <input id="place" type="text" placeholder="miejsce" onChange={props.onInputNewEvent.bind(this,'newEventPlace')} value={props.newEventPlace}></input><br />
                <label style={props.newEventPlaceValid ? {display:'none'}: {display: 'inline'}} htmlFor="place">Pole jest wymage!</label><br />
                <input id="time" type="text" placeholder="godzina" onChange={props.onInputNewEvent.bind(this,'newEventTime')} value={props.newEventTime}></input><br />
                <label style={props.newEventTimeValid ? {display:'none'}: {display: 'inline'}} htmlFor="time">Pole jest wymage!</label><br />
                <input id="date" type="text" placeholder="data" onChange={props.onInputNewEvent.bind(this,'newEventDate')} value={props.newEventDate}></input><br />
                <label style={props.newEventDateValid ? {display:'none'}: {display: 'inline'}} htmlFor="date">Pole jest wymage!</label><br />
                <button type="submit">Dodaj</button>
            </form>
        </div>
    )
}

export default AddEvent;