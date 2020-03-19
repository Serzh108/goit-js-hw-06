import users from './users.js';
'use strict';
// console.log(users);


// Задание 1
// Получить массив имен всех пользователей (поле name).
const getUserNames = users => users.map(user => user.name); 

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
