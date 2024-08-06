// import path from 'path';

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const fileURLToPath = require('url');
const dirname = require('path');
const route = require('./routes');

const app = express();
const port = 3000;

// const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/resources/views/');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// route init
route(app);
