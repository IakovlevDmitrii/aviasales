
/* Если часов или минут меньше 10, то добавим впереди "0" */
import transformMoments from './transform-moments';

const getHoursAndMinutesFromMinutes = (allMinutes) => {
  const hours = Math.floor(allMinutes / 60);
  const minutes = allMinutes - hours * 60;

  return `${transformMoments(hours)} ч ${transformMoments(minutes)} м`;
};

export default getHoursAndMinutesFromMinutes;