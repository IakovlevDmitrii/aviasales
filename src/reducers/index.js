
import {combineReducers} from 'redux'

import isCheckedFilters from './is-checked-filters';
import isFiltersOpen from './is-filters-open';
import loading from './loading';
import sortingMethod from './sorting-method';
import ticketsError from './tickets-error';
import ticketsLoaded from './tickets-loaded';

const reducer = combineReducers({
  isCheckedFilters,
  isFiltersOpen,
  loading,
  sortingMethod,
  error: ticketsError,
  tickets: ticketsLoaded,
});

export default reducer;
