class SiteController {
  // [GET] /
  home(req, res) {
    res.render('home');
  }

  // [GET] /search
  show(req, res) {
    res.send('NEWS SLUG DETAIL !!!');
  }
}

module.exports = new SiteController();
