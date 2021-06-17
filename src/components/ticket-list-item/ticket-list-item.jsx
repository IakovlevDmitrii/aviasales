
import React from 'react';
import PropTypes from 'prop-types';
import Segment from '../segment';
import { withClass } from '../hoc';
import { transformPrice } from '../../utils';

import styles from './ticket-list-item.module.scss';

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
  currencySign,
} = styles;

const TicketListItem = ({ticketData}) => {
  const {
    price,
    carrier,
    flightThere,
    flightBack,
  } = ticketData;

  const alternateText = `${carrier} logo`;
  const cost = transformPrice(price);

  return (
    <>
      <div className={ticketHeader}>
        <div className={ticketPrice}>
          <span className={styles.price}>
            {cost}
            <span className={currencySign}> ₽</span>
          </span>
        </div>
        <div className={ticketCarriers}>
          <ul className={ticketCarrierList}>
            <li className={ticketCarrierListItem}>
              <div className={ticketCarrier}>
                <img
                  className={ticketCarrierImg}
                  src={`http://pics.avs.io/99/36/${ carrier }.png`}
                  alt={alternateText}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={ticketBody}>
        <Segment flightData={flightThere} />
        <Segment flightData={flightBack} />
      </div>
    </>
  )
};

TicketListItem.propTypes = {
  ticketData: PropTypes.shape({

    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,

    flightThere: PropTypes.shape({
      route: PropTypes.string.isRequired,
      departureAndArrivalTime: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      numberOfTransfers: PropTypes.string.isRequired,
      stops: PropTypes.arrayOf(
        PropTypes.string.isRequired).isRequired,
    }).isRequired,

    flightBack: PropTypes.shape({
      route: PropTypes.string.isRequired,
      departureAndArrivalTime: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      numberOfTransfers: PropTypes.string.isRequired,
      stops: PropTypes.arrayOf(
        PropTypes.string.isRequired).isRequired,
    }).isRequired,
  }).isRequired
};

export default withClass(ticket)(TicketListItem);
