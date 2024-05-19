import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';

const app = express();
const port = 3000;

// HTTP logger  
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})