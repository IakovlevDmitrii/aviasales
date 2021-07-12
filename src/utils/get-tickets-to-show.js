const getTicketsToShow = (filters, method, ticketsArray) => {
  const { ALL_TRANSFERS, WITHOUT_TRANSFERS, ONE_TRANSFERS, TWO_TRANSFERS, THREE_TRANSFERS } = filters;

  const filteredTickets = ticketsArray.filter((ticket) => {
    /* кличество пересадок при перелете 'туда' */
    const thereStops = ticket.flightThere.stops.length;

    /* кличество пересадок при перелете 'обратно' */
    const backStops = ticket.flightBack.stops.length;

    if (ALL_TRANSFERS) {
      return true;
    }

    if (WITHOUT_TRANSFERS && (thereStops === 0 || backStops === 0)) {
      return true;
    }

    if (ONE_TRANSFERS && (thereStops === 1 || backStops === 1)) {
      return true;
    }

    if (TWO_TRANSFERS && (thereStops === 2 || backStops === 2)) {
      return true;
    }

    return THREE_TRANSFERS && (thereStops === 3 || backStops === 3);
  });

  /* Функция для сортировки билетов.
  Если в качестве метода сортировки выбран 'дешевый',
  то отсортируем билеты по цене,
  иначе, по продолжительности рейсов */

  const compare = (aTicket, bTicket) => {
    /* Общая продолжительность рейсов первого билета */
    const aDuration = aTicket.flightThere.duration + aTicket.flightBack.duration;

    /* Общая продолжительность рейсов второго билета */
    const bDuration = bTicket.flightThere.duration + bTicket.flightBack.duration;

    return method === 'CHEAPEST' ? aTicket.price - bTicket.price : aDuration - bDuration;
  };

  const sortedTickets = filteredTickets.sort(compare);

  return sortedTickets.slice(0, 5);
};

export default getTicketsToShow;
