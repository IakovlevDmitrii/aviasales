import React, { Component } from 'react';
import classNames from 'classnames';

// импортируем список табов
import tabList from './data/tab-list';

// импортируем стили
import styles from './tabs.module.scss';
// Деструктурируем импортированные классы
const {
  selections,
  selection,
  selectionActive,
  selectionButton,
} = styles;

export default class Tabs extends Component {
  state = {
    // какой таб выбран
    selectedTab: null,
  };

  // записывает в state выбранный таб
  onTabClick = (selectedTab) => {
    this.setState({
      selectedTab,
    });
  };

  render() {
    // элемент для отображения всех табов
    const tabs = tabList.map((tab) => {
      const { name, label } = tab;
      const { selectedTab } = this.state;

      // выделим выбранный таб
      const selectionClasses = classNames({
        [selection]: true,
        [selectionActive]: selectedTab === name,
      });

      return (
        <li key={name} className={selectionClasses}>
          <button
            className={selectionButton}
            onClick={() => this.onTabClick(name)}
            type="button"
          >
            {label}
          </button>
        </li>
      );
    });

    return <ul className={selections}>{tabs}</ul>;
  }
}
