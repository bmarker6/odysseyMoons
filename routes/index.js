var express = require('express');
var router = express.Router();
var moonsArray = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { root: 'public' });
});

router.get('/moons', function(req, res) {
  res.json(moonsArray);
})

router.post('/moons', function(req, res) {
  moonsArray.push(req.body);
  res.json(moonsArray);
}

module.exports = router;
