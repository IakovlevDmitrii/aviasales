
import getTransformedFlightData from './get-transformed-flight-data';

let nextId = 1;

const transformTickets = (data) => (
  data.map((ticket) => {
    const {price, carrier, segments} = ticket;

    const id = nextId;
    nextId += 1;

    return {
      id,
      price,
      carrier,
      flightThere: getTransformedFlightData(segments[0]),
      flightBack: getTransformedFlightData(segments[1]),
    }
  })
);

export default transformTickets;
