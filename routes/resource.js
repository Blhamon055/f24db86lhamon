var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var frappacino_controller = require('../controllers/frappacino');

router.get('/', api_controller.api);

router.post('/frappacino', frappacino_controller.frappacino_create_post);
router.delete('/frappacino/:id', frappacino_controller.frappacino_delete);
router.put('/frappacino/:id', frappacino_controller.frappacino_update_put);
router.get('/frappacino/:id', frappacino_controller.frappacino_detail);
router.get('/frappacino', frappacino_controller.frappacino_view_all_Page);

module.exports = router;
