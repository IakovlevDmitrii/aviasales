import React from 'react';
import styles from './no-tickets-to-show.module.scss';

const NoTicketsToShow = () => (
  <div className={styles.noTickets}>Рейсов, подходящих под заданные фильтры, не найдено</div>
);

export default NoTicketsToShow;
