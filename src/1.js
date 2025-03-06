function getRandomJoke() {
  const jokes = ["Why did the chicken cross the road?", "To get to the other side!", "I'm reading a book on how not to live. It's not easy being green."];
  return jokes[Math.floor(Math.random() * jokes.length)];
}
