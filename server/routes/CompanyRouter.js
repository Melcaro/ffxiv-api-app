const router = require('express').Router();
const CompanyCtrl = require('../controllers/FreeCompanyCtrl');

router.get('/:freeCompanyId', CompanyCtrl.getFcInfosById);

router.get('/', CompanyCtrl.getFCInfos);

module.exports = router;
