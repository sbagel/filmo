const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const morgan = require('morgan')
const router = require('./routes.js');
const db = require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: true} ));
app.use(morgan('dev'));
app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}/api`);
})