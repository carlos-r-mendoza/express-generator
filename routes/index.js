var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/views/:page', function(req, res, next) {
  res.render(req.params.page);
});

module.exports = router;
