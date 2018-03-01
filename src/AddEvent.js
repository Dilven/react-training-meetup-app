import React from 'react';
import PropTypes from 'prop-types';

const AddEvent = (props) => {

    return(
        <div>
            Dodawanie nowego wydarzenia <br />
            <form onSubmit={props.onAddEvent}>
                <input type="text" placeholder="nazwa wydarzenia" onChange={props.eventName} value={props.newEventName}></input><br />
                <input type="text" placeholder="miejsce" onChange={props.eventPlace} value={props.newEventPlace}></input><br />
                <input type="text" placeholder="godzina" onChange={props.eventTime} value={props.newEventTime}></input><br />
                <input type="text" placeholder="godzina" onChange={props.eventDate} value={props.newEventDate}></input><br />
                <button type="submit">Dodaj</button>
            </form>
        </div>
    )



    AddEvent.propTypes = {
        newEventName: PropTypes.string.isRequred,
        eventPlace: PropTypes.func.isRequred,
        newEventPlace: PropTypes.string.isRequred,
        eventPlace: PropTypes.func.isRequred,
        newEventTime: PropTypes.string.isRequred,
        eventTime: PropTypes.func.isRequred,
        onAddEvent: PropTypes.func.isRequired
    }
}

export default AddEvent;