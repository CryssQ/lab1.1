import { faker } from '@faker-js/faker';
const words = faker.helpers.uniqueArray(
    faker.word.sample,
    faker.number.int({ min: 10, max: 20 })
);

console.log('length -> ', words.length);
console.table(words);

let i = Math.floor((words.length - 1) / 2);
let j = i 
while (i >= 0) {
    console.log(`${i} => ${words[i]} | ${j} => ${words[j]}`);
    
    i--;
    j++;
}
