import getResource from './getResource';

const baseUrl = 'https://front-test.beta.aviasales.ru/';
let idForSearch = '';
let nextId = 1;

const getIdForSearch = async () => {
  try {
    const { searchId } = await getResource(`${baseUrl}search`);
    return searchId;

  } catch {
    throw new Error()
  }
};

const getTickets = async () => {
  try {
    idForSearch = idForSearch || (await getIdForSearch());
    const url = `${baseUrl}tickets?searchId=${idForSearch}`;

    const response = await getResource(url);

    const { tickets, stop } = response;
    const ticketsSet = tickets.map((ticket) => {
      const { price, carrier, segments } = ticket;
      const id = nextId;
      nextId += 1;

      return {
        id,
        price,
        carrier,
        flightThere: segments[0],
        flightBack: segments[1],
      };
    });

    return { ticketsSet, stop };

  } catch {
    throw new Error()
  }
};

class AviasalesService {
  getTicketsSet = () => getTickets();
}

const aviasalesService = new AviasalesService();

export default aviasalesService;
