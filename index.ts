// Palindrome
// ================================

// prettier-ignore
function isPalidrome(str) {
  const lowerStr = str.toLowerCase();

  return lowerStr === lowerStr.split("").reverse().join("")
}

console.log(isPalidrome("anna"));

// Palindrome
// ================================
