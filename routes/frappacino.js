var express = require('express');
const frappacino_controller = require('../controllers/frappacino');
var router = express.Router();

/* GET home page. */
router.get('/frappacino/:id', frappacino_controller.frappacino_detail);
module.exports = router;