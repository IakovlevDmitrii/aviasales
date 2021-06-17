
import React from 'react';
import PropTypes from 'prop-types';
import styles from './segment-flight.module.scss';

const {
  flight,
  flightLabel,
  flightValue,
} = styles;

const SegmentFlight = ({label, value}) => (
  <div className={flight}>
    <p className={flightLabel}>{label}</p>
    <p className={flightValue}>{value}</p>
  </div>
);

 SegmentFlight.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SegmentFlight;
