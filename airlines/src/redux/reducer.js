import {
    SET_SOURCE,
    SET_DESTINATION,
    SET_DEPARTURE,
    SET_RETURN,
    SET_DEPARTURE_FLIGHT,
    SET_RETURN_FLIGHT,
    SET_TICKET_QUANTITY,
    SET_USER
} from './types';

const INITIAL_STATE = {
    source: '',
    destination: '',
    departure: '2021-04-28',
    return: '2021-08-18',
    departureFlight: '',
    returnFlight: '',
    ticketQuantity: 1,
    userDetails: null
};

const reducer = (state = INITIAL_STATE, action) => {
    const { payload } = action
    switch (action.type) {
        case SET_SOURCE: {
            return {
                ...state, source: payload,
            };
        }
        case SET_DESTINATION: {
            return {
                ...state, destination: payload,
            };
        }
        case SET_DEPARTURE: {
            return {
                ...state, departure: payload,
            };
        }
        case SET_RETURN: {
            return {
                ...state, return: payload,
            };
        }
        case SET_DEPARTURE_FLIGHT: {
            return {
                ...state, departureFlight: payload,
            };
        }
        case SET_RETURN_FLIGHT: {
            return {
                ...state, returnFlight: payload,
            };
        }
        case SET_TICKET_QUANTITY: {
            return {
                ...state, ticketQuantity: payload,
            };
        }
        case SET_USER: {
            return {
                ...state, userDetails: payload,
            };
        }
        default: return state;
    }
};

export default reducer;