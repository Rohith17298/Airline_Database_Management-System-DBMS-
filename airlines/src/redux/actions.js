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


export const setSource = (payload) => ({ type: SET_SOURCE, payload });
export const setDestination = (payload) => ({ type: SET_DESTINATION, payload });
export const setDeparture = (payload) => ({ type: SET_DEPARTURE, payload });
export const setReturn = (payload) => ({ type: SET_RETURN, payload });
export const setDepartureFlight = (payload) => ({ type: SET_DEPARTURE_FLIGHT, payload });
export const setReturnFlight = (payload) => ({ type: SET_RETURN_FLIGHT, payload });
export const setTicketQuantity = (payload) => ({ type: SET_TICKET_QUANTITY, payload });
export const setUser = (payload) => ({ type: SET_USER, payload });
