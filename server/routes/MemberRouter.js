const router = require('express').Router();
const MemberCtrl = require('../controllers/MemberCtrl');

router.get('/', MemberCtrl.getMemberInfos);

module.exports = router;
