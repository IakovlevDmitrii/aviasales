/* Если часов или минут меньше 10, то добавим впереди "0" */
import addZero from './add-zero';

const getHoursAndMinutesFromMinutes = (allMinutes) => {
  const hours = Math.floor(allMinutes / 60);
  const minutes = allMinutes - hours * 60;

  return `${addZero(hours)} ч ${addZero(minutes)} м`;
};

export default getHoursAndMinutesFromMinutes;
