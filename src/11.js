function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
console.log(getRandomNumber(5, 10)); // Output: 7
