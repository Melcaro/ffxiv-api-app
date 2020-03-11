const router = require('express').Router();
const CompanyCtrl = require('../controllers/FreeCompanyCtrl');

router.get('/', CompanyCtrl);

module.exports = router;
