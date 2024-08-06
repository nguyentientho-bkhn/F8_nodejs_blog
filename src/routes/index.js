const newsRouter = require('./news');

function route(app) {
  app.get('/', (req, res) => {
    res.render('home');
  });

  app.use('news', newsRouter);

  app.get('/search', (req, res) => {
    res.render('search');
  });

  app.post('/search', (req, res) => {
    console.log('request body post = ' + JSON.stringify(req.body.q));
    res.send('');
  });
}

module.exports = route;
