import { TOGGLE_FILTER } from '../actions-types';
import { filterList, filtersNames } from '../../components/filters/filter-list';

const { ALL_TRANSFERS, WITHOUT_TRANSFERS, ONE_TRANSFERS, TWO_TRANSFERS, THREE_TRANSFERS } = filtersNames;

const initialState = {};

/* В начальном состоянии все фильтры будут иметь значение true */
filterList.forEach((filter) => {
  initialState[filter.name] = true;
});

const isCheckedFilters = (state = initialState, action) => {
  if (action.type === TOGGLE_FILTER) {
    let newState = {};

    switch (action.payload) {
      case ALL_TRANSFERS:
        /* Изменим значение фильтра 'ALL_TRANSFERS'
        на противоположный и присвоим
        такое же значение всем фильтрам */
        for (const filter in state) {
          if ({}.hasOwnProperty.call(state, filter)) {
            newState[filter] = !state.ALL_TRANSFERS;
          }
        }
        break;

      /* Изменим значение выбранного фильтра на противоположный */
      case WITHOUT_TRANSFERS:
        newState = {
          ...state,
          WITHOUT_TRANSFERS: !state.WITHOUT_TRANSFERS,
        };
        break;

      case ONE_TRANSFERS:
        newState = {
          ...state,
          ONE_TRANSFERS: !state.ONE_TRANSFERS,
        };
        break;

      case TWO_TRANSFERS:
        newState = {
          ...state,
          TWO_TRANSFERS: !state.TWO_TRANSFERS,
        };
        break;

      case THREE_TRANSFERS:
        newState = {
          ...state,
          THREE_TRANSFERS: !state.THREE_TRANSFERS,
        };
        break;

      /* По умолчанию все фильтры будут иметь значение 'true' */
      default:
        for (const filter in state) {
          if ({}.hasOwnProperty.call(state, filter)) {
            newState[filter] = true;
          }
        }
    }

    /* Если какой либо из фильтров выключен, выключим фильтр 'Все' */
    for (const filter in newState) {
      if ({}.hasOwnProperty.call(newState, filter)) {
        if (newState.ALL_TRANSFERS && !newState[filter]) {
          newState.ALL_TRANSFERS = false;

          break;
        }
      }
    }

    /* Вернем новое состояние если не включен каждый фильтр */
    for (const filter in newState) {
      if ({}.hasOwnProperty.call(newState, filter)) {
        if (filter !== ALL_TRANSFERS && !newState[filter]) {
          return newState;
        }
      }
    }

    /* В новом состоянии включим фильтр 'Все', т.к. включен каждый фильтр */
    newState.ALL_TRANSFERS = true;

    return newState;
  }

  return state;
};

export default isCheckedFilters;
