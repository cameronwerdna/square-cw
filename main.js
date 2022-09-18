function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }

console.log(isSquare(4)) // => true
console.log(isSquare(43)) // => false 
console.log(isSquare(144)) // => true