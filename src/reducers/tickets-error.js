
import {TICKETS_ERROR} from '../actions-types';

const ticketsError = (state = null, action) => (
  action.type === TICKETS_ERROR ?
    action.payload :
    state
);

export default ticketsError;
