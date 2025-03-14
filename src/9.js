function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomCode(length) {
  let code = '';
  for (let i = 0; i < length; i++) {
    code += String.fromCharCode(getRandomInt(26) + 97);
  }
  return code;
}

console.log(getRandomCode(10));
