import * as constants from '../constants';
import events from '../data/events.json';

const initialState = {
    events,
    isLoading: false,
    filter:'',
    newEventName:'',
    newEventNameValid:false,
    newEventTime:'',
    newEventTimeValid:false,
    newEventPlace:'',
    newEventPlaceValid:false,
    newEventDate:'',
    newEventDateValid:false,
}
console.log(events)
export function eventsReducer(state = initialState, action) {
    
    switch(action.type){
        case constants.EVENTS_CLEAR:
            return {...state, events:[]};
        case constants.DELETE_EVENT:
            const choiceEvents = state.events.filter(element =>element.id !== action.payload.index);
            return {...state, events: choiceEvents};
        case constants.EVENTS_FILTER:
            return {...state, filter:action.payload.value};
        case constants.EVENTS_INPUT_NEW_EVENT:
            return {...state, [action.payload.field]: action.payload.newValue, [action.payload.field + 'Valid']: action.payload.newValue.length > 0}
        case constants.EVENTS_ADD:
            return {...state, events: action.payload.events, newEventDate:'', newEventTime:'', newEventName:'', newEventPlace:''}
        default:
            return state;
        }
}

