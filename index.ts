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

// console.log(fibonacci(6));

// function fibonacci2(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }
