
const filtersNames = {
  ALL_TRANSFERS: 'ALL_TRANSFERS',
  WITHOUT_TRANSFERS: 'WITHOUT_TRANSFERS',
  ONE_TRANSFERS: 'ONE_TRANSFERS',
  TWO_TRANSFERS: 'TWO_TRANSFERS',
  THREE_TRANSFERS: 'THREE_TRANSFERS',
};

const {
  ALL_TRANSFERS,
  WITHOUT_TRANSFERS,
  ONE_TRANSFERS,
  TWO_TRANSFERS,
  THREE_TRANSFERS
} = filtersNames;

const filterList = [
  { name: ALL_TRANSFERS, label: 'Все' },
  { name: WITHOUT_TRANSFERS, label: 'Без пересадок' },
  { name: ONE_TRANSFERS, label: '1 пересадка' },
  { name: TWO_TRANSFERS, label: '2 пересадки' },
  { name: THREE_TRANSFERS, label: '3 пересадки' },
];

export {
  filtersNames,
  filterList,
};
