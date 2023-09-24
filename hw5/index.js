
// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// const numbers = {
//   keyin1: 1,
//   keyin2: 2,
//   keyin3: 3,
//   keyin4: 4,
//   keyin5: 5,
//   keyin6: 6,
//   keyin7: 7,
// }

// const values = Object.values(numbers);
// const result = values.filter(el => el >= 3);
// console.log(result);


// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};


const{author, postId, comments} = post;

for (const key in post.comments) {
    for (const innerKey in post.comments[key]) {
        
     console.log(post.comments[key][innerKey]);
    }
    }


// const{userId, userName, text, rating} = post.comments;
// console.log(post.comments.userId);

// for (const key in post.comments.rating) {
//     for (const innerKey in post.comments.rating[key]) {
        
//      console.log(post.comments.rating[key][innerKey]);
//     }
//     }

// console.log(post.author);
// let comVal= Object.values(post.comments);
// let res = comVal.find(el => el == '2');
// // console.log(comVal[0]);
// console.log(res);



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [evenNumbers, oddNumbers] = numbers.reduce(
//   (acc, val) => {
//     acc[val % 2].push(val);
//     return acc;
//   },
//   [[], []]
// );

// console.log(evenNumbers); // [2, 4, 6, 8]
// console.log(oddNumbers); // [1, 3, 5, 7, 9]





// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

// const products = [
//   {
//     id: 3,
//     price: 200,
//   },
//   {
//     id: 4,
//     price: 900,
//   },
//   {
//     id: 1,
//     price: 1000,
//   },
// ];

// for (const key in products) {
//     for (const innerKey in products[key]) {
        
//         products[key][innerKey] = products[key][innerKey] * 0.85;
//     }
//     }
// console.log(products);


// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.


// const products = [
//   {
//     id: 3,
//     price: 127,
//     photos: [
//       "1.jpg",
//       "2.jpg",
//     ],
//   },
//   {
//     id: 5,
//     price: 499,
//     photos: [],
//   },
//   {
//     id: 10,
//     price: 26,
//     photos: [
//       "3.jpg",
//     ],
//   },
//   {
//     id: 8,
//     price: 78,
//   },
// ];




// **Задание 5**
// Дано 2 массива

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// const obj = {};
// for (let i = 0; i < en.length; i++) {
//   obj[en[i]] = ru[i];
// }
// console.log(obj);

// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.