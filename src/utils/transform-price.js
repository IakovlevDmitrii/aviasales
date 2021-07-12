/* Отделим последние три цифры пробелом */
const transformPrice = (cost) => {
  const costToString = String(cost);
  const thousand = costToString.slice(0, -3);
  const units = costToString.slice(-3);

  return `${thousand} ${units}`;
};

export default transformPrice;
