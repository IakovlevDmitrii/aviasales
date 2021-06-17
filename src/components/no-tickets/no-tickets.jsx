
import React from 'react';
import styles from './no-tickets.module.scss';

const NoTickets = () => (
  <div className={styles.noTickets}>
    Рейсов, подходящих под заданные фильтры, не найдено
  </div>
);

export default NoTickets;
