"use strict";

// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

function loadData(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.text();
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}

getUserData(ID) {
  let arr = loadData("https://reqres.in/");
  if (ID === arr.ID) {
    return arr.values();

  }
  else {
    console.log(error.message);
  }
};

console.log(getUserData(12));


// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента 
// и использует fetch для отправки этих данных на удаленный сервер для сохранения.
// Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *

// // Пример использования функции
// const user = {
//   "name": "John Doe",
//   "job": "unknown"
// };

// saveUserData(user)
//   .then(() => {
//     console.log('User data saved successfully');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. 
// Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json 
// и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). 
// Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/



const user = {
  "name": "John Doe",
  "job": "unknown"
};

saveUserData(user, url)
fetch(url)
  .then((user) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send(JSON.stringify(user));
  })
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });

saveUserData(user, "https://reqres.in/");



// 1. Нужно возвращать значение из функции, вместе с промисом, не выводить значение в консоль.
// Если прям строго следовать заданию, то должно быть так:

// async function getUserData(id) {
//   // Для получения данных пользователя есть отдельная "ручка" (путь)
//   const response = await fetch(`https://reqres.in/api/users/${id}`);
//   // Если ответ пришел с 200-ым статусом, то разбираем json и возвращаем данные.
//   if (response.ok) {
//     return await response.json();
//   }
//   // если статус был не 200, кидаем ошибку с текстом, который нам прислали.
//   throw new Error(await response.text());
// }

// getUserData(3)
//   .then(result => console.log(result))
//   .catch(err => console.log(`Ошибка: ${err.message}`));
// То есть возвращается промис, либо с результатом, либо с сообщением ошибки.
// В 29 строке не понял что за скобки, что хотели там сделать.
// 2. Советую использовать fetch, не xhr.
// Где функция-то сама? в 78 строке нужно скобки поставить для функции.
// Тут тоже нужно возвращать значение, как и в 1 задании, не просто в консоль выводить.