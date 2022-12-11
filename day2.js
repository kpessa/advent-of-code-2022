const fs = require('fs');

let input = fs.readFileSync('day2input.txt', 'utf-8');

// input = `A Y\r\nB X\r\nC Z`;

let mapToChar = {
  A: 'r',
  B: 'p',
  C: 's',
  X: 'r',
  Y: 'p',
  Z: 's',
};

let mapToNum = {
  r: 1,
  p: 2,
  s: 3,
};

function outcome(str) {
  switch (str) {
    case 'pr':
    case 'sp':
    case 'rs':
      return 0;
    case 'rr':
    case 'pp':
    case 'ss':
      return 3;
    case 'rp':
    case 'ps':
    case 'sr':
      return 6;
  }
}

let part2 = {
  X: 'lose',
  Y: 'draw',
  Z: 'win',
};

function line(str) {
  let options = 'rpsr'.split``;
  let [p1, p2] = str.split(' ');
  p1 = mapToChar[p1];
  let outcomeWanted = part2[p2];

  if (outcomeWanted == 'draw') p2 = p1;
  if (outcomeWanted == 'win') p2 = options[options.indexOf(p1) + 1];
  if (outcomeWanted == 'lose') p2 = options[options.lastIndexOf(p1) - 1];

  let score = mapToNum[p2] + outcome(p1 + p2);

  console.log(`${mapToNum[p2]} + ${outcome(p1 + p2)} = ${score}`);

  return score;
}

// debugger;
let lines = input.split('\r\n').map(l => line(l));
let total = lines.reduce((p, c) => p + c);
console.log(total);
debugger;
