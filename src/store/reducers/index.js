import { combineReducers } from 'redux';

import allTicketsLoaded from './all-tickets-loaded';
import isCheckedFilters from './is-checked-filters';
import isFiltersOpen from './is-filters-open';
import sortingMethod from './sorting-method';
import ticketsError from './tickets-error';
import ticketsSetLoaded from './tickets-set-loaded';

const reducer = combineReducers({
  allTicketsLoaded,
  isCheckedFilters,
  isFiltersOpen,
  sortingMethod,
  hasError: ticketsError,
  tickets: ticketsSetLoaded,
});

export default reducer;
