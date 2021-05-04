// Функция для создания полей в isCheckedFilters в state
// из списка фильтров filterList.
// Поле будет хранить название фильтра и его состояние (включен или нет)
function createFilter(list) {
  return list.map((item) => ({ name: item.name, isChecked: false }));
}

export default createFilter;
