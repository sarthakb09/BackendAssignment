// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send({ message: 'Welcome to my API' });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require('express'); // Import the express library
const app = express(); // Initialize the express app
const port = process.env.PORT || 3000; // Set the port number for the app, either from the environment variable or use 3000 by default

app.get('/', (req, res) => { // Define the endpoint for the root path '/'
  res.send({ message: 'Welcome to my API' }); // Send a response with a message in JSON format
});

app.listen(port, () => { // Start the server and listen to the specified port
  console.log(`Server is running on port ${port}`); // Log a message to the console to indicate that the server has started
});
