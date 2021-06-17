
import getResponseData from './get-response-data';
import transformTickets from './transform-tickets';

async function getTickets({
  baseUrl,
  idUrl,
  idResponseField,
  ticketsUrl,
  ticketsResponseField,
}) {
  const id = await getResponseData(baseUrl, idUrl, idResponseField);
  const tickets = await getResponseData(baseUrl, `${ticketsUrl}${id}`, ticketsResponseField);

  return transformTickets(tickets)
}

export default getTickets;
