/* список названий методов сортировки */
const sortingMethodsNames = {
  CHEAPEST: 'CHEAPEST',
  FASTEST: 'FASTEST',
};

const { CHEAPEST, FASTEST } = sortingMethodsNames;

/* Список методов сортировки */
const sortingMethodsList = [
  { name: CHEAPEST, label: 'Самый дешевый' },
  { name: FASTEST, label: 'Самый быстрый' },
];

export { sortingMethodsNames, sortingMethodsList };
