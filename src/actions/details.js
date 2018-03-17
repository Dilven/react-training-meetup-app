import * as constants from '../constants';
import fetch from 'isomorphic-fetch';

export function detailsGetStart () {
    return {
        type: constants.DETAILS_GET_START,        
    };
};
export function detailsGetFailed (error) {
    return {
        type: constants.DETAILS_GET_FAILED, 
        payload: {
            error
        }       
    };
};
export function detailsGetSuccess (data) {
    return {
        type: constants.DETAILS_GET_SUCCESS,
        payload: {
            data
        }      
    };
};

export function getDataDetails() {
    return (dispatch) => {
        dispatch(detailsGetStart());
        
        fetch('http://frontendinsights.com/events.json')
        .then(response => response.json())
        .then(data => dispatch(detailsGetSuccess(data)))
        .catch(error => dispatch(detailsGetFailed(error)))
    }; 
};

export function showDetails(eventId) {
    return {
        type: constants.DETAILS_SHOW,
        payload: {
            eventId
        }        
    };
};