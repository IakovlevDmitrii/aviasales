import React, { Component } from 'react';
import classNames from 'classnames';

/* импортируем функцию для создания в state в isCheckedFilters полей
с именем фильтра и его состоянием (включен или нет) */
import createFilter from '../../utils/helper-functions/create-filter';
// импортируем список всех фильтров
import filterList from './data/filter-list';

import checkbox from './images/checkbox.png';
import checkboxChecked from './images/checkboxChecked.png';
import openMenu from './images/openMenu.png';
import closeMenu from './images/closeMenu.png';

// Импортируем стили
import styles from './filters.module.scss';
// Деструктурируем импортированные классы
const {
  filters,
  filtersContainer,
  filtersTitle,
  filtersTitleText,
  filtersTitleIcon,
  filtersList,
  filtersListItem,
  filtersListVisible,
  filter,
  filterImage,
  filterText
} = styles;

export default class Filters extends Component {
  state = {
    // Открыт ли список фильтров
    isFiltersOpen: false,
    // Какие из фильтров выбраны
    isCheckedFilters: createFilter(filterList),
  };

  // изменяет значение фильра на противоположный
  onToggleChecked = (filterName) => {
    this.setState(({ isCheckedFilters }) => {
      // найдем индекс поля с таким же name
      const index = isCheckedFilters.findIndex((elem) => elem.name === filterName);

      // найдем нужный фильтр по индексу
      const oldFilter = isCheckedFilters[index];

      // изменим его состояние на противоположный
      const newFilter = { ...oldFilter, isChecked: !oldFilter.isChecked };

      // state isCheckedFilters с новым значением
      const newIsCheckedFilters = [
        ...isCheckedFilters.slice(0, index),
        newFilter,
        ...isCheckedFilters.slice(index + 1),
      ];

      return {
        isCheckedFilters: newIsCheckedFilters,
      };
    });
  };

  onToggleButton = () => {
    this.setState(({ isFiltersOpen }) => ({
      isFiltersOpen: !isFiltersOpen,
    }));
  };

  render() {
    const { isFiltersOpen, isCheckedFilters } = this.state;

    // элемент для отображения всех фильтров
    const AllFilters = filterList.map((item) => {
      const { name, label } = item;

      /* в currentFilter запишем поле из isCheckedFilters,
         name которого совпадает с name в filterList */
      const currentFilter = isCheckedFilters.find((elem) => (elem.name === name ? elem : false));

      // сохраним в isChecked выбран ли фильтр
      const { isChecked } = currentFilter;

      return (
        <li key={name} className={filtersListItem}>
          <button onClick={() => this.onToggleChecked(name)} className={filter} type="button">
            <img
              src={isChecked ? checkboxChecked : checkbox}
              alt={isChecked ? 'selected' : 'not selected'}
              className={filterImage}
            />
            <span className={filterText}>{label}</span>
          </button>
        </li>
      );
    });

    // показать ли список фильтров
    const filtersListClasses = classNames({
      [filtersList]: true,
      [filtersListVisible]: isFiltersOpen
    });

    return (
      <div className={filters}>
        <div className={filtersContainer}>
          <div className={filtersTitle}>
            <h3 className={filtersTitleText}>Количество пересадок</h3>
            <button onClick={this.onToggleButton} type="button">
              <img
                src={isFiltersOpen ? closeMenu : openMenu}
                className={filtersTitleIcon}
                alt={isFiltersOpen ? 'close' : 'open'}
              />
            </button>
          </div>
          <ul className={filtersListClasses}>{AllFilters}</ul>
        </div>
      </div>
    );
  }
}
