// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i < 11; i++) {
//   if (i === 0) {
//     console.log(`0 – это ноль`)
//   }
//   else if (i % 2 == 0) {
//     console.log(`${i} – четное число`)
//   }
//   else {
//     console.log(`${i} – нечетное число`)
//   }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const middleArr1 = arr.slice(0, 3);
// const middleArr2 = arr.slice(5, 7);
// const finalArr = middleArr1 + ',' + middleArr2;

// console.log(finalArr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const elements = [];
let sum = 0;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < 5; i++) {
  let randomElement = Math.round(getRandomArbitrary(0, 9));
  elements[i] = randomElement;

}

for (let i = 0; i < 5; i++) {
  sum = sum + elements[i];
}

const minValue = Math.min.apply(null, elements);

console.log(elements);

let findNumber = elements.indexOf(3);
if (findNumber == -1) {
  console.log("Цифры 3 нет в массиве");
} else {
  console.log("Цифра 3 есть в массиве");
}
console.log(`сумма - ${sum}`);
console.log(`минимальное число - ${minValue}`);



