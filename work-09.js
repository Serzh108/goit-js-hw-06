import users from './users.js';
'use strict';
// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества
// их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  const sortByFriendsQuantity = (x, y) => x.friends.length - y.friends.length;
  return users.sort(sortByFriendsQuantity).map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
