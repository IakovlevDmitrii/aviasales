
/* Если часов или минут меньше 10, то добавим впереди "0" */
const transformMoments = (moments) => (
  moments > 9 ?
    moments :
    `0${String(moments)}`
);

export default transformMoments;
