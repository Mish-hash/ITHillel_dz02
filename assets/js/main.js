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

const promptNumberPlus2Result = `${promptNumber} + ${staticNumber} = ${promptNumberPlus2 += staticNumber}`;
const promptNumberMinus2Result = `\n${promptNumber} - ${staticNumber} = ${promptNumberMinus2 -= staticNumber}`;
const promptNumberMultiply2Result = `\n${promptNumber} * ${staticNumber} = ${promptNumberMultiply2 *= staticNumber}`;
const promptNumberDivide2Result = `\n${promptNumber} / ${staticNumber} = ${promptNumberDivide2 /= staticNumber}`;


console.log(promptNumberPlus2Result, promptNumberMinus2Result, promptNumberMultiply2Result, promptNumberDivide2Result);


/* определити длинну строки введенной при помощи prompt и выведите длинну в консоль */

const promptInputLenght = promptInput.length;

const promptInputLenghtResult = `Длинна строки при вводе = ${promptInputLenght}`;

console.log(promptInputLenghtResult);


/* Округлите число 0.51000002 до двух знаков после запятой и прибавте к нему 2, результат выведете в консоль */

const floatNamber = 0.51000002;

let floatNamberTo2 = parseFloat(floatNamber.toFixed(2));

console.log(floatNamberTo2 += staticNumber);


/* ====== СТРОКИ ======

дано:

const str = 'the quick brown fox jumps over the lazy dogs back';

const str_two = 'brown fox jumps'

определите с какого символа строка str_two начинается в строке str

преобразуте любую из этих строк к заглавным буквам, результат выведете в консоль */

const str = 'the quick brown fox jumps over the lazy dogs back';

const str_two = 'brown fox jumps';

const strIndexResult = str.lastIndexOf(str_two);

const resultIndexStr = `Вторая строка на чинается в строке str с ${strIndexResult} позиции`;
const resultUpperCase = '\nВторая строка в верхнем регистре \u2014 ' + str_two.toUpperCase();

console.log(resultIndexStr, resultUpperCase);


/* ====== ЛОГИЧЕСКИЕ ОПЕРАЦИИ ======

обявите переменные

a = 1, b = 2, c = 3, d = 3

сравните a c b, b c c, c c d и результаты между собой таким ображом чтобы получить true используя ИЛИ не используя НЕ

сравните a c b, b c c, c c d и результаты между собой таким ображом чтобы получить true используя И не используя НЕ */

const a = 1, b = 2, c = 3, d = 3;

const resultOr =  (a === c || c === b) || (b === c || c === c) || (c === c || c === d);
const resultAnd = (a === c && c === b) && (b === c && c === c) || (c === c && c === d);

console.log(resultOr, resultAnd);


/* Задача со ЗВЕЗДОЧКОЙ, творческое задание:

сделайти простой пример можно в одну строку, демонстрирующий различая между == и ===

также продемонстрируйте работу оператора ??*/

console.log('===============================================================');

const resultStrCompare1 = `Сравниваем с помощью "==" (false == 0) получаем \u2014 ${false == 0}`;
const resultStrCompare2 = `\nСравниваем с помощью "===" (false === 0) получаем \u2014 ${false === 0}`;
const resultStrCompare3 = `\nСравниваем с помощью "==" ("0" == 0) получаем \u2014 ${'0' == 0}`;
const resultStrCompare4 = `\nСравниваем с помощью "===" ("0" === 0) получаем \u2014 ${'0' === 0}`;
const resultStrCompareText = '\nНе строгое сравнение не сравнивает типы данных и в дальнейшем при произведении операций над значением мы можем получить ошибку при вычислениях.\nСтрогое сравнение так же проверяет тип данных и в дальнейшем можне смело проводить операции над значениями.';

console.log(resultStrCompare1,resultStrCompare2,resultStrCompare3,resultStrCompare4,resultStrCompareText);


