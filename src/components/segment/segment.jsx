
import React from 'react';
import PropTypes from 'prop-types';
import SegmentFlight from '../segment-flight';
import {getHoursAndMinutesFromMinutes} from '../../utils';
import styles from './segment.module.scss';

const Segment = ({flightData}) => {

  const {
    route,
    departureAndArrivalTime,
    duration,
    numberOfTransfers,
    stops,
  } = flightData;

  return (
    <div className={styles.segment}>
      <SegmentFlight
        label={route}
        value={departureAndArrivalTime} />
      <SegmentFlight
        label='в пути'
        value={getHoursAndMinutesFromMinutes(duration)} />
      <SegmentFlight
        label={numberOfTransfers}
        value={stops.join(', ')} />
    </div>
  )
};

Segment.propTypes = {
  flightData: PropTypes.shape({
    route: PropTypes.string.isRequired,
    departureAndArrivalTime: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    numberOfTransfers: PropTypes.string.isRequired,
    stops: PropTypes.arrayOf(
      PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default Segment;
