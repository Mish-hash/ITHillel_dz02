/* Объявите константу с целым числом числом и выведите ее в консоль в шестнадцатиричном и двочном виде. */

const number = 848;

const number2x = number.toString(2);
const number16x = number.toString(16);

const resultNumber = `Изначальное число \u2014 ${number} \nДвоичное число \u2014 ${number2x} \nШестнадцатиричное число \u2014 ${number16x}`;

console.log(resultNumber);