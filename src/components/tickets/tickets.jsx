import React from 'react';

import Ticket from '../ticket';

import './tickets.css';

const Tickets = () => {
  const hello = 'Hello World';

  return (
    <div className='tickets'>
      <Ticket />
      <Ticket />
      <Ticket />
      {hello}
    </div>
  )
};

export default Tickets;