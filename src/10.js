const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const getRandomString = () => {
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";
  for (let i = 0; i < 10; i++) {
    text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return text;
};
const getRandomBoolean = () => Math.random() >= 0.5;
