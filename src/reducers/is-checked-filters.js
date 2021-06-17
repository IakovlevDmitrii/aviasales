
import {TOGGLE_FILTER} from '../actions-types';
import {filterList, filtersNames} from '../components/filters/filter-list';

const {ALL_TRANSFERS} = filtersNames;

/* state = {
    isCheckedFilters: {
      ALL_TRANSFERS: true,
      WITHOUT_TRANSFERS: true,
      ONE_TRANSFERS: true,
      ... ,
    },
  }
*/

const initialState = {} ;

/* В начальном состоянии все фильтры будут иметь значение true */
filterList.forEach((filter) => {
  initialState[filter.name] = true;
});

const isCheckedFilters = (state = initialState, action) => {
  if(action.type === TOGGLE_FILTER) {

    /* --- Если выбран фильтр 'Все' -------------------- */

    if(action.payload === ALL_TRANSFERS) {

      /* Создадим новый state */
      const newState = {};

      /* Сохраним значение, которое присвоим всем фильтрам */
      const isChecked = !state.ALL_TRANSFERS;

      /* Каждому фильтру присвоим одинаковое значение */
      for(const key in state) {
        if({}.hasOwnProperty.call(state, key)) {

          newState[key] = isChecked;
        }
      }

      return newState;
    }

    /* --- Если выбран любой фильтр, кроме 'Все' ------- */

    /* Создадим пустой объект */
    const emptyState = {};

    /* Фильтр, значение которого надо изменить */
    const filterForCheck = filtersNames[action.payload];

    /* Значение фильтра изменим на противоположное */
    const isChecked = !state[action.payload];

    /* Новое состояние будет копиеей старового, в котором значение
    выбранного фильтра заменим на противоположное */
    const newState = Object.assign(
      emptyState,
      state,
      {[filterForCheck]: isChecked}
    );

    /* Если какой либо из фильтров выключен, выключим фильтр 'Все' */
    for (const filter in newState) {
      if({}.hasOwnProperty.call(newState, filter)) {

        if(newState.ALL_TRANSFERS && !newState[filter]){
          newState.ALL_TRANSFERS = false;

          break;
        }
      }
    }

    /* Вернем новое состояние если не включен каждый фильтр */
    for (const filter in newState) {
      if({}.hasOwnProperty.call(newState, filter)) {

        if(filter !== ALL_TRANSFERS && !newState[filter]) {
          return newState;
        }
      }
    }

    /* В новом состоянии включим фильтр 'Все', т.к. включен каждый фильтр */
    newState.ALL_TRANSFERS = true;

    return newState;
  }

  return state
};

export default isCheckedFilters;
