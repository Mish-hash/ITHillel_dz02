/* Объявите константу с целым числом числом и выведите ее в консоль в шестнадцатиричном и двочном виде. */

const number = 848;

const number2x = number.toString(2);
const number16x = number.toString(16);

const resultNumber = `Изначальное число \u2014 ${number} \nДвоичное число \u2014 ${number2x} \nШестнадцатиричное число \u2014 ${number16x}`;

console.log(resultNumber);

/* Используя prompt введите число как константу, затем выведите в консоль результаты операций + - * / на 2 над этим числом */

const promptInput = prompt('Введите число');
const promptNumber = promptInput ? parseInt(promptInput) : 10;
const staticNumber = 2;

let promptNumberPlus2 = promptNumber;
let promptNumberMinus2 = promptNumber;
let promptNumberMultiply2 = promptNumber;
let promptNumberDivide2 = promptNumber;

const promptNumberPlus2Result = `${promptNumber} + ${staticNumber} = ${promptNumberPlus2 += 2}`;
const promptNumberMinus2Result = `\n${promptNumber} - ${staticNumber} = ${promptNumberMinus2 -= 2}`;
const promptNumberMultiply2Result = `\n${promptNumber} * ${staticNumber} = ${promptNumberMultiply2 *= 2}`;
const promptNumberDivide2Result = `\n${promptNumber} / ${staticNumber} = ${promptNumberDivide2 /= 2}`;


console.log(promptNumberPlus2Result, promptNumberMinus2Result, promptNumberMultiply2Result, promptNumberDivide2Result);


