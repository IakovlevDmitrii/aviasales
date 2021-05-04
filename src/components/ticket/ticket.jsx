import React from 'react';

import s7logo from './S7 Logo.png';
import styles from './ticket.module.scss';

const {
  ticket,
  ticketHeader,
  ticketPrice,
  ticketCarriers,
  ticketCarrier,
  ticketCarrierList,
  ticketCarrierListItem,
  ticketCarrierImg,
  ticketBody,
  ticketSegment,
  ticketSegmentFlight,
  ticketSegmentFlightLabel,
  ticketSegmentFlightValue,
  price,
  currencySign,
} = styles;

function Ticket() {
  return (
    <div className={ticket}>
      <div className={ticketHeader}>
        <div className={ticketPrice}>
          <span className={price}>
            12&thinsp;349
            <span className={currencySign}> ₽</span>
          </span>
        </div>
        <div className={ticketCarriers}>
          <ul className={ticketCarrierList}>
            <li className={ticketCarrierListItem}>
              <div className={ticketCarrier}>
                <img className={ticketCarrierImg} src={s7logo} alt="s7logo" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={ticketBody}>
        <div className={ticketSegment}>
          <div className={ticketSegmentFlight}>
            <p className={ticketSegmentFlightLabel}>MOW – HKT</p>
            <p className={ticketSegmentFlightValue}>10:45 – 08:00</p>
          </div>
          <div className={ticketSegmentFlight}>
            <p className={ticketSegmentFlightLabel}>в пути</p>
            <p className={ticketSegmentFlightValue}>21 ч 15 м</p>
          </div>
          <div className={ticketSegmentFlight}>
            <p className={ticketSegmentFlightLabel}>2 пересадки</p>
            <p className={ticketSegmentFlightValue}>HKG, JNB</p>
          </div>
        </div>

        <div className={ticketSegment}>
          <div className={ticketSegmentFlight}>
            <p className={ticketSegmentFlightLabel}>HKT - MOW</p>
            <p className={ticketSegmentFlightValue}>10:45 – 08:00</p>
          </div>
          <div className={ticketSegmentFlight}>
            <p className={ticketSegmentFlightLabel}>в пути</p>
            <p className={ticketSegmentFlightValue}>21 ч 15 м</p>
          </div>
          <div className={ticketSegmentFlight}>
            <p className={ticketSegmentFlightLabel}>2 пересадки</p>
            <p className={ticketSegmentFlightValue}>HKG, JNB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
