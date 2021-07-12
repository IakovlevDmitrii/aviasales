const getNumberOfTransfers = (stopsArray) => {
  const numberOfTransfers = stopsArray.length;

  if (!numberOfTransfers) {
    return 'без пересадок';
  }
  if (numberOfTransfers === 1) {
    return '1 пересадка';
  }

  return `${numberOfTransfers} пересадки`;
};

export default getNumberOfTransfers;
