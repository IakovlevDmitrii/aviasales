
import {getTickets} from '../utils';

const ticketsSearchData = {
  baseUrl: 'https://front-test.beta.aviasales.ru/',
  idUrl: 'search',
  idResponseField: 'searchId',
  ticketsUrl: 'tickets?searchId=',
  ticketsResponseField: 'tickets',
};

class AviasalesService {
  getAviasalesTickets = () => (getTickets(ticketsSearchData))
}

const aviasalesService = new AviasalesService();
export default aviasalesService;
