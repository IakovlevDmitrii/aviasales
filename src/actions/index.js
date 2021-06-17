
import {
  LOADING,
  SET_SORTING_METHOD,
  TICKETS_ERROR,
  TICKETS_LOADED,
  TOGGLE_FILTER,
  TOGGLE_FILTER_VIEW,
} from '../actions-types';

export const loadingActionCreator = () => ({ type: LOADING });
export const setSortingMethod = (method) => ({ type: SET_SORTING_METHOD, method });
export const ticketsError = (error) => ({ type: TICKETS_ERROR, payload: error });
export const ticketsLoaded = (newTickets) => ({ type: TICKETS_LOADED, payload: newTickets });
export const toggleFilter = (filter) => ({ type: TOGGLE_FILTER, payload: filter });
export const toggleFilterView = () => ({ type: TOGGLE_FILTER_VIEW });
