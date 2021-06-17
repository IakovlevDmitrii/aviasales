
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {withClass} from '../hoc';
import {compose} from '../../utils';

import {toggleFilter, toggleFilterView} from '../../actions';

/* импортируем список всех фильтров */
import {filterList} from './filter-list';

import checkbox from './images/checkbox.png';
import checkboxChecked from './images/checkboxChecked.png';
import openMenu from './images/openMenu.png';
import closeMenu from './images/closeMenu.png';

import styles from './filters.module.scss';

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
  filterText,
} = styles;

const Filters = ({
  isFiltersOpen,
  isCheckedFilters,
  toggleFilterDispatch,
  toggleFilterViewDispatch,
}) => {

  /* элемент для отображения всех фильтров  */
  const allFilters = filterList.map(filterItem => {
    const {name, label} = filterItem;

    /* сохраним в checked выбран ли фильтр  */
    const checked = isCheckedFilters[name];

    return (
      <li className={filtersListItem} key={name}>
        <button
          className={filter}
          onClick={() => toggleFilterDispatch(name)}
          type="button"
        >
          <img
            className={filterImage}
            src={checked ? checkboxChecked : checkbox}
            alt={checked ? 'selected' : 'not selected'}
          />
          <span className={filterText}>{label}</span>
        </button>
      </li>
    );
  });

  /* показать ли список фильтров */
  const filtersListClasses = classNames({
    [filtersList]: true,
    [filtersListVisible]: isFiltersOpen
  });

  return (
    <div className={filtersContainer}>
      <div className={filtersTitle}>
        <h3 className={filtersTitleText}>Количество пересадок</h3>
        <button onClick={toggleFilterViewDispatch} type="button">
          <img
            className={filtersTitleIcon}
            src={isFiltersOpen ? closeMenu : openMenu}
            alt={isFiltersOpen ? 'close' : 'open'}
          />
        </button>
      </div>
      <ul className={filtersListClasses}>
        {allFilters}
      </ul>
    </div>
  );
};

Filters.propTypes = {
  isFiltersOpen: PropTypes.bool.isRequired,
  isCheckedFilters: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  toggleFilterDispatch: PropTypes.func.isRequired,
  toggleFilterViewDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  isCheckedFilters,
  isFiltersOpen
}) => ({
  isCheckedFilters,
  isFiltersOpen
});

const mapDispatchToProps = {
  toggleFilterDispatch: toggleFilter,
  toggleFilterViewDispatch: toggleFilterView,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withClass(filters),
)(Filters);
