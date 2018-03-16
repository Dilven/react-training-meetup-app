import * as constants from '../constants';
import events from '../data/events.json';

const initialState = {
    events,
    event: {},
    itemId: 0,
}

export function detailsReducer(state = initialState, action) {
    switch(action.type) {
        case constants.DETAILS_SHOW:
            const event = state.events.find(element =>element.id === parseInt(action.payload.eventId,10));        
            return {...state, event, itemId: action.payload.eventId};
        default:
            return state;
    }
}