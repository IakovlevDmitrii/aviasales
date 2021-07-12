/* Если часов или минут меньше 10, то добавим впереди "0" */
import addZero from './add-zero';

/* функция для получения значения часов из даты */
const getHours = (date) => addZero(new Date(date).getUTCHours());

/* функция для получения значения минут из даты */
const getMinute = (date) => addZero(new Date(date).getUTCMinutes());

const getHoursAndMinutes = (date) => `${getHours(date)}:${getMinute(date)}`;

const getDepartureAndArrivalTime = (startTime, duration) => {
  /* Вторую дату получим путем прибавления duration
    ( продолжительность, измеряется в минутах )
     к таймстампу первой даты */
  const endTime = new Date(Date.parse(startTime) + duration * 1000 * 60);

  const from = getHoursAndMinutes(startTime);
  const to = getHoursAndMinutes(endTime);

  return `${from} - ${to}`;
};

export default getDepartureAndArrivalTime;
