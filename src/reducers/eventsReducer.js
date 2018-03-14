import * as constants from '../constants';
import events from '../data/events.json';

const initialState = {
    events,
    isLoading: false
}
console.log(events)
export function eventsReducer(state = initialState, action) {
    
    switch(action.type){
        case constants.EVENTS_CLEAR:
            return {...state, events:[]};
        default:
            return state;
        }
}

