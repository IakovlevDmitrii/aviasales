import { ALL_TICKETS_LOADED } from '../actions-types';

const allTicketsLoaded = (state = false, action) => (action.type === ALL_TICKETS_LOADED ? action.payload : state);

export default allTicketsLoaded;
