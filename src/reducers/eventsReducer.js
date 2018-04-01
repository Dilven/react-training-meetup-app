import * as constants from '../constants';

const initialState = {
    events:[],
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
export const events = (state = initialState, action) => {
    switch(action.type){
        case constants.GET_DATA_STARTED:
            return {...state, isLoading: true};
        case constants.GET_DATA_SUCCESS:
            return {...state, isLoading: false, events: action.payload.events};
        case constants.GET_DATA_FAILED:
            return {...state, isLoading: false};
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

