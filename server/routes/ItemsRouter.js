const router = require('express').Router();
const ItemsCtrl = require('../controllers/ItemsCtrl');

router.get('/:itemID', ItemsCtrl.getItemInfos);

module.exports = router;
