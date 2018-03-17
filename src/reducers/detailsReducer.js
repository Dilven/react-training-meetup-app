import * as constants from '../constants';


const initialState = {
    events:[],
    event: {},
    eventId: null,
    isLoading: false,
    shouldFind: false,
}

export function detailsReducer(state = initialState, action) {
    switch(action.type) {
        case constants.DETAILS_GET_START:
            return {...state, isLoading: true};
        case constants.DETAILS_GET_SUCCESS:
            return {...state, events: action.payload.data, shouldFind: true, isLoading: false};
        case constants.DETAILS_GET_FAILED:
            return {...state, isLoading: false};
        case constants.DETAILS_SHOW:
            const eventId = action.payload.eventId;
            const event = state.events.find(item => item.id === parseInt(eventId, 10));
            return { ...state, event, eventId, shouldFind: false };
        default:
            return state;
    }
}