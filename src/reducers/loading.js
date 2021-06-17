
import {LOADING} from '../actions-types';

const loading = (state = true, action) => (
  action.type === LOADING ?
    !state :
    state
);

export default loading;
