let fs = require('fs');

let data = fs.readFileSync('day1input.txt', 'utf-8');

let lines = data.split('\n').map(Number);
let elves = [];

let calories = 0;
for (calorie of lines) {
  if (calorie === 0) {
    elves.push(calories);
    calories = 0;
  } else {
    calories += calorie;
  }
}

elves.push(calories);

let top3 = elves.sort((a, b) => b - a).slice(0, 3);

let top3total = top3.reduce((p, c) => p + c, 0);

debugger;
