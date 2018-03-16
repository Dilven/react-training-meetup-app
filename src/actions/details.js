import * as constants from '../constants';


export function showDetails(eventId) {
    return {
        type: constants.DETAILS_SHOW,
        payload: {
            eventId
        }        
    };
};