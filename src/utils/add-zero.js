/* Если часов или минут меньше 10, то добавим впереди "0" */
const addZero = (number) => (number > 0 && number < 9 ? `0${String(number)}` : number);

export default addZero;
