// Задание 1
// Создайте функцию которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// let userNumber1 = 2;
// let userNumber2 = 3;

// let cubeNumber = (userNumber) => userNumber*userNumber*userNumber;

// console.log(cubeNumber(userNumber1)+cubeNumber(userNumber2));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, 
// необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа 
// и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// let userNumber = Number(prompt('Введите размер заработной платы: '));
// let userNumberNew = (userNumber) => userNumber*0.87;

// alert(isNaN(userNumber)  ? 'Значение введено неверно!' 
//       : `Размер заработной платы за вычетом налогов равен ${userNumberNew(userNumber)}`);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа,
//  необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// let userNumber1 = Number(prompt('Введите значение 1: '));
// let userNumber2 = Number(prompt('Введите значение 2: '));
// let userNumber3 = Number(prompt('Введите значение 3: '));

// function maxNumberUser(userNumber1, userNumber2, userNumber3) {
//   if (userNumber1 > userNumber2) {
//     if (userNumber1 > userNumber3) {
//       alert(`${userNumber1} наибольшее`);
//     }
//     else {
//       alert(`${userNumber3} наибольшее`);
//     }
//   }
//   else if (userNumber1 < userNumber2) {
//     if (userNumber2 > userNumber3) {
//       alert(`${userNumber2} наибольшее`);
//     }
//     else {
//       alert(`${userNumber3} наибольшее`);
//     }
//   }
// }

// maxNumberUser(userNumber1, userNumber2, userNumber3);


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа
// и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
// должно вывести число 8 в консоль (sum - функция сложения в данном примере,
//   ваши названия функций могут отличаться). Округлять значения,
//   которые возвращают функции не нужно, однако, обратите внимание на разность,
//   функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
//   Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let sum = (userNumber1, userNumber2) => userNumber1 + userNumber2;
console.log(sum(2, 4));

function diff(userNumber1, userNumber2) {
  if (userNumber1 > userNumber2) {
    diffResault = userNumber1 - userNumber2;
    return diffResault;
  }
  else {
    diffResault = userNumber2 - userNumber1;
    return diffResault;

  }
}
console.log(diff(2, 4));

let mult = (userNumber1, userNumber2) => userNumber1 * userNumber2;
console.log(mult(2, 4));

let division = (userNumber1, userNumber2) => userNumber1 / userNumber2;
console.log(division(2, 4));