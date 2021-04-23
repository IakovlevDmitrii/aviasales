import React from 'react';

import './ticket.css';

const Ticket = () => {
  const price = '13 400 р';

  return (
    <div className='tickets'>
      <div className='ticket'>
        <div className='ticket__header'>
          <div className='ticket__price'>
            {price}
          </div>
          <div className='ticket__airline'>
            S7 Airlines
          </div>
        </div>
        <div className='ticket__flight'>
          <div className='ticket__route'>
            <div className='ticket__airports'>
              MOW – HKT
            </div>
            <div className='ticket__times'>
              11:20 – 00:50
            </div>
          </div>
        </div>
        <div className='ticket__flight'>
          <div className='ticket__route'>
            <div className='ticket__airports'>
              MOW – HKT
            </div>
            <div className='ticket__times'>
              11:20 – 00:50
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Ticket;