
import getDepartureAndArrivalTime from './get-departure-and-arrival-time';

const getRoute = (origin, destination) => (
  `${origin} - ${destination}`
);

const getNumberOfTransfers = (stopsArray) => {
  const numberOfTransfers = stopsArray.length;

  if(!numberOfTransfers) {return 'без пересадок';}
  if (numberOfTransfers === 1) {return '1 пересадка';}

  return `${numberOfTransfers} пересадки`;
};

const getTransformedFlightData = (flightData) => {
  const {
    origin,
    destination,
    date,
    duration,
    stops,
  } = flightData;

  return {
    route: getRoute(origin, destination),
    departureAndArrivalTime: getDepartureAndArrivalTime(date, duration),
    duration,
    numberOfTransfers: getNumberOfTransfers(stops),
    stops,
  }
};

export default getTransformedFlightData;
