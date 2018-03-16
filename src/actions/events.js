import *as constants from '../constants';
import fetch from 'isomorphic-fetch';

export function clearEvents () {
    return {
        type: constants.EVENTS_CLEAR,
    };
};

export function deleteEvent (index) {
    return {
        type: constants.DELETE_EVENT,
        payload: {
            index
        }
    }
};

export function filteredEvents (value) {
    return {
        type: constants.EVENTS_FILTER,
        payload: {
            value     
        }      
    };
};

export function inputNewEvent(field, newValue) {
    return{
        type: constants.EVENTS_INPUT_NEW_EVENT,
        payload: {
            field, 
            newValue
        }
    };
};

export function addEvent(events) {
    return {
        type: constants.EVENTS_ADD,
        payload: {
            events
        }
    };
};

export function requestStarted() {
    return{
        type: constants.GET_DATA_STARTED
    }
}

export function success(data) {
    return {
        type: constants.GET_DATA_SUCCESS,
        payload: {
            events: data
        }
    };
};

export function failed(error) {
    return {
        type: constants.GET_DATA_FAILED,
        payload: {
            error
        }
    };
};

export function getData() {
    return (dispatch) => {
        dispatch(requestStarted());

        fetch('http://frontendinsights.com/events.json')
            .then(response => response.json())
            .then(data => dispatch(success(data)))
            .catch(error => dispatch(failed(error)))
    };
};