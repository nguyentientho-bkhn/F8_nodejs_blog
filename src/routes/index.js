const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  app.use('/', siteRouter);

  app.use('/search', siteRouter);

  app.use('/news', newsRouter);

  app.post('/search', (req, res) => {
    console.log('request body post = ' + JSON.stringify(req.body.q));
    res.send('');
  });
}

module.exports = route;
