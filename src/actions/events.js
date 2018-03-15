import *as constants from '../constants';

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