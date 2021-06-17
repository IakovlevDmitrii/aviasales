
import {TICKETS_LOADED} from '../actions-types';

const tickets = (state = [], action) => (
  action.type === TICKETS_LOADED ?
    action.payload :
    state
);

export default tickets;
