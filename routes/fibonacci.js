var express = require('express');
var router = express.Router();

var math = require('../math.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  if (req.query.fibonum) {
    math.fibonacci(req.query.fibonum, (result) => {
      res.render('fibonacci', {
        title: "Calculate Fibonacci's number",
        fibonum: req.query.fibonum,
        fiboval: result
      })
    })

    // math.fibonacci(req.query.fibonum).then((fiboval) => {
    //   res.render('fibonacci', {
    //     title: "Calculate Fibonacci's number",
    //     fibonum: req.query.fibonum,
    //     fiboval: fiboval
    //   })
    // })

  } else {
    res.render("fibonacci", {
      title: "Calculate Fibonacci's number",
      fibonum: undefined
    })
  }

});

module.exports = router;
