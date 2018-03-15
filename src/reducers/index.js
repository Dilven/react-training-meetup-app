import { combineReducers } from 'redux';
import { detailsReducer } from './detailsReducer.js';
import { eventsReducer } from './eventsReducer';

export const reducers = combineReducers({
    details: detailsReducer,
    events: eventsReducer
});