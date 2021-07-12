import {
  ALL_TICKETS_LOADED,
  SET_SORTING_METHOD,
  TICKETS_ERROR,
  TICKETS_SET_LOADED,
  TOGGLE_FILTER,
  TOGGLE_FILTER_VIEW,
} from '../actions-types';

export const allTicketsLoadedActionCreator = (stop) => ({ type: ALL_TICKETS_LOADED, payload: stop });
export const setSortingMethod = (method) => ({ type: SET_SORTING_METHOD, method });
export const ticketsError = (hasError) => ({ type: TICKETS_ERROR, payload: hasError });
export const toggleFilter = (filter) => ({ type: TOGGLE_FILTER, payload: filter });
export const toggleFilterView = () => ({ type: TOGGLE_FILTER_VIEW });
export const ticketsSetLoaded = (ticketsSet) => ({ type: TICKETS_SET_LOADED, payload: ticketsSet });
