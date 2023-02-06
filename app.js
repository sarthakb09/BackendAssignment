const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');
const middleware = require('./src/middleware/middleware');

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(middleware.verifyToken);
app.use(routes);

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: error.message,
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running...');
});