import { TOGGLE_FILTER_VIEW } from '../actions-types';

const isFiltersOpen = (state = false, action) => (action.type === TOGGLE_FILTER_VIEW ? !state : state);

export default isFiltersOpen;
