import { Router } from 'express';
import { getMemberInfos, getMemberResults } from '../controllers/MemberCtrl';

const router = Router();
router.get('/:memberId', getMemberInfos);
router.get('/', getMemberResults);

export default router;
