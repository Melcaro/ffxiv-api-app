const router = require('express').Router();
const MemberCtrl = require('../controllers/MemberCtrl');

router.get('/:memberId', MemberCtrl.getMemberInfos);
router.get('/', MemberCtrl.getMemberResults);

module.exports = router;
