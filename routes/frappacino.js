var express = require('express');
const frappacino_controller = require('../controllers/frappacino');
var router = express.Router();

/* GET home page. */
router.get('/', frappacino_controller.frappacino_view_all_Page);
module.exports = router;