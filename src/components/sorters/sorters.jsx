
import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {sortingMethodsList} from './sorting-methods-list';
import {setSortingMethod} from '../../actions';
import styles from './sorters.module.scss';

const {
  sorters,
  sorter,
  sorterActive,
  sorterButton,
} = styles;

const Sorters = ({sortingMethod, setSortingMethodDispatch}) => {

  // элемент для отображения всех методов сортировки
  const sortingMethods = sortingMethodsList.map((method) => {
    const {name, label} = method;

    // выделим выбранный метод сортировки
    const sorterClasses = classNames({
      [sorter]: true,
      [sorterActive]: sortingMethod === name,
    });

    return (
      <li key={name} className={sorterClasses}>
        <button
          className={sorterButton}
          onClick={() => setSortingMethodDispatch(name)}
          type="button"
        >
          {label}
        </button>
      </li>
    );
  });

  return (
    <ul className={sorters}>
      {sortingMethods}
    </ul>
  )
};

Sorters.propTypes = {
  sortingMethod: PropTypes.string.isRequired,
  setSortingMethodDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  sortingMethod
}) => ({
  sortingMethod
});

const mapDispatchToProps = ({
  setSortingMethodDispatch: setSortingMethod
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Sorters);
