require('dotenv').config()
require('express-async-errors');


const express = require('express')
const app = express()

const mainRoute = require('./routes/main')

app.use(express.json())

app.use('/api/v1', mainRoute)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();