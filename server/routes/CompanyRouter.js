const router = require('express').Router();
const CompanyCtrl = require('../controllers/FreeCompanyCtrl');

router.get('/', CompanyCtrl.getFCInfos);

router.get('/:freeCompanyId', CompanyCtrl.getFcInfosById);

module.exports = router;
