var express = require('express');
const frappacino_controller = require('../controllers/frappacino');
const frappacino = require('../models/frappacino');
var router = express.Router();

/* GET home page. */
router.get('/', frappacino_controller.frappacino_view_all_Page);
router.get('/detail',frappacino_controller.frappacino_view_one_Page);
router.get('/create', frappacino_controller.frappacino_create_Page);
router.get('/update', frappacino_controller.frappacino_update_Page);
router.get('/delete', costume_controlers.costume_delete_Page);
module.exports = router;