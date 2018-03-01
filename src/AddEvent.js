import React from 'react';
import PropTypes from 'prop-types';

const AddEvent = (props) => {

    return(
        <div>
            Dodawanie nowego wydarzenia <br />
            <form onSubmit={props.onAddEvent}>
                <input type="text" placeholder="nazwa wydarzenia" onChange={props.onInputNewEvent.bind(this,'newEventName')} value={props.newEventName}></input><br />
                <input type="text" placeholder="miejsce" onChange={props.onInputNewEvent.bind(this,'newEventPlace')} value={props.newEventPlace}></input><br />
                <input type="text" placeholder="godzina" onChange={props.onInputNewEvent.bind(this,'newEventTime')} value={props.newEventTime}></input><br />
                <input type="text" placeholder="godzina" onChange={props.onInputNewEvent.bind(this,'newEventDate')} value={props.newEventDate}></input><br />
                <button type="submit">Dodaj</button>
            </form>
        </div>
    )



    AddEvent.propTypes = {
        newEventName: PropTypes.string.isRequred,
        newEventPlace: PropTypes.string.isRequred,
        newEventTime: PropTypes.string.isRequred,
        onInputNewEvent: PropTypes.func.isRequired,
        onAddEvent: PropTypes.func.isRequired
    }
}

export default AddEvent;