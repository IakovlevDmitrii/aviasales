import React from 'react';
import PropTypes from 'prop-types';
import SegmentFlight from '../segment-flight';
import { getHoursAndMinutesFromMinutes, getDepartureAndArrivalTime, getNumberOfTransfers } from '../../utils';
import styles from './segment.module.scss';

const Segment = ({ flightData }) => {
  const { origin, destination, date, duration, stops } = flightData;

  return (
    <div className={styles.segment}>
      <SegmentFlight label={`${origin} - ${destination}`} value={getDepartureAndArrivalTime(date, duration)} />
      <SegmentFlight label="в пути" value={getHoursAndMinutesFromMinutes(duration)} />
      <SegmentFlight label={getNumberOfTransfers(stops)} value={stops.join(', ')} />
    </div>
  );
};

Segment.propTypes = {
  flightData: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    stops: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default Segment;
