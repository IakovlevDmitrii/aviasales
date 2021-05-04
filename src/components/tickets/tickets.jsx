import React from 'react';

import Ticket from '../ticket';
import styles from './tickets.module.scss';

const { tickets } = styles;

function Tickets() {
  return (
    <div className={tickets}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
}

export default Tickets;
