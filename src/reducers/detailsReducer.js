import * as constants from '../constants';
import * as action from '../actions/details';
import events from '../data/events.json';

const initialState = {
    events,
    event: null,
}

export function detailsReducer(state = initialState, action) {
    switch(action.type) {
        case constants.DETAILS_SHOW:
            return state;
        default:
            return state;
    }
}