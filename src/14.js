// Get the current date and time
const today = new Date();

// Calculate the number of seconds since the Unix epoch (January 1, 1970, 00:00:00 UTC)
const secondsSinceEpoch = Math.floor(today.getTime() / 1000);

// Convert the number of seconds to a formatted string
const formattedDate = new Date(secondsSinceEpoch * 1000).toISOString().substr(0, 10);

console.log(`The current date is: ${formattedDate}`);
