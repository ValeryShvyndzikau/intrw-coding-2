console.clear();
// Palindrome
// ================================

// prettier-ignore
function isPalidrome(str) {
  const lowerStr = str.toLowerCase();

  return lowerStr === lowerStr.split("").reverse().join("")
}

// console.log(isPalidrome("anna"));

// Anagram
// ================================
// prettier-ignore
function anagram(str1, str2) {
  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

// console.log(anagram("dell", "ledl"));

// Fibonacci
// ================================
// prettier-ignore
function fibonacci(num) {
  let result = [0,1];

  for (let i = 2; i <= num; i++) {
    const left = result[i - 1];
    const right = result[i - 2];

    result.push(left + right);
  }

  return result[num];
}

// 0,1,1,2,3,5,8,13,21,34
//console.log(fibonacci(7)); // 13 num is index in fibonacci sequence

// function fibonacci2(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// Find vowels (гласные)
// ================================

function findVowels(str) {
  const vowels = ["a", "o", "u", "i"];
  return str.split("").reduce((memo, current) => {
    return vowels.includes(current) ? memo.concat(current) : memo;
  }, []);
}

// console.log(findVowels("dfdsfjgodgpodiuaaag"));

// Title case a string
// ===============================
// prettier-ignore
function capitalize(str) {
  return str.split(" ").reduce((memo, current) => {
    const [firstLetter, ...rest] = current;
    return memo.concat(firstLetter.toUpperCase() + rest.join(""));
  }, []).join(' ');
}

// console.log(capitalize("hello world"));

// Replace characters
// ===============================
// prettier-ignore
function replace(input, a, b) {
  return input.replace(new RegExp(a, 'g'), b);
}

console.log(replace("helllo world", "l", "X"));

// Find pair with given sum in an array
// ===============================
const list = [8, 7, 2, 5, 3, 1];

function findPair(num, list) {
  //for (let i = 0; i < list.length; i++) {
  //let current = list[i];
  //let rest = list.slice(i+1);

  //console.log(current, 'current')
  //console.log(rest, 'rest')
  // console.log(i, 'i')

  let counter = 0;
  let result = [];

  while (list.length) {
    const current = list[0];
    const rest = list.slice(1);

    for (let i = 0; i < rest.length; i++) {
      if (current + rest[i] === num) {
        result.push(counter);
      }
    }

    counter++;
    list.splice(0, 1);
  }
}

function sum(a, array) {
  return;
}

console.log(findPair(4, [4, 5, 6]));
