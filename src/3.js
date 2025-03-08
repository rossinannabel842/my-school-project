// Function to generate a random integer between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Function to generate a random number between 0 and 25
function getRandomNumber(max) {
  return getRandomInt(max + 1);
}

// Function to generate a random string of length 8
function getRandomString() {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";
  for (let i = 0; i < 8; i++) {
    randomString += characters.charAt(getRandomNumber(25));
  }
  return randomString;
}
