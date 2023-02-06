// const express = require('express');
// const mongoose = require('mongoose');
// const routes = require('./src/routes/routes');
// const middleware = require('./src/middleware/middleware');

// const app = express();

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(middleware.verifyToken);
// app.use(routes);

// app.use((error, req, res, next) => {
//   res.status(error.status || 500).send({
//     error: error.message,
//   });
// });

// app.listen(process.env.PORT || 5000, () => {
//   console.log('Server is running...');
// });

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');
const middleware = require('./src/middleware/middleware');

// Initialize express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/<database_name>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Middleware to parse incoming request data as JSON
app.use(express.json());

// Middleware to parse incoming request data as URL encoded data
app.use(express.urlencoded({ extended: true }));

// Use custom middleware to verify the JWT token
app.use(middleware.verifyToken);

// Use the routes defined in the routes file
app.use(routes);

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: error.message,
  });
});

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running...');
});
