import { TICKETS_SET_LOADED } from '../actions-types';

const tickets = (state = [], action) => {
  if (action.type === TICKETS_SET_LOADED) {
    return [...state, ...action.payload];
  }

  return state;
};

export default tickets;
