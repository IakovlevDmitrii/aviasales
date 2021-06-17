
import React from 'react';
import PropTypes from 'prop-types';
import TicketListItem from '../ticket-list-item';
import styles from './ticket-list.module.scss';

const {ticketList} = styles;

const TicketList = ({tickets}) => {

  /* Элемент для отображения всех билетов */
  const allTickets = tickets.map((ticketData) => {
    const {id} = ticketData;

    return (
      <li key={id}>
        <TicketListItem ticketData={ticketData} />
      </li>
    )
  });

  return (
    <ul className={ticketList}>
      {allTickets}
    </ul>
  )
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.object.isRequired).isRequired,
};

export default TicketList;
