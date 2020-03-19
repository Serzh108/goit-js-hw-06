import users from './users.js';
'use strict';
// Напиши функции которые с помощью перебирающих методов массива
//  (никаких for, splice и т. д.) выполняют следующие операции над 
//  массивом объектов пользователей из файла users.js.

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
