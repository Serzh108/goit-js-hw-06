import users from './users.js';
'use strict';
// Задание 10
// Получить массив всех умений всех пользователей (поле skills), 
// при этом не должно быть повторяющихся умений и они должны быть
//  отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const skillsArray = users.reduce((acc, value) => {
      return acc.concat(value.skills);  
  }, []).sort();
 
  const filteredSkillsArray = [...new Set(skillsArray)];
  return filteredSkillsArray;
  // return [...new Set(skillsArray)]; 
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nos