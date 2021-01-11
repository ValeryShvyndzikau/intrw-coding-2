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
  console.log(str1.toLowerCase().split('').sort().join(''))
  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

//console.log(anagram("dell", "ledleeg"));
