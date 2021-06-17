
import {SET_SORTING_METHOD} from '../actions-types';
import {sortingMethodsNames} from '../components/sorters/sorting-methods-list';

const {CHEAPEST} = sortingMethodsNames;

const sortingMethod = (state = CHEAPEST , action) => (
  action.type === SET_SORTING_METHOD ?
    action.method :
    state
);

export default sortingMethod;
