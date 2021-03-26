import { Router } from 'express';
import { getFcInfosById, getFCInfos } from '../controllers/FreeCompanyCtrl';

const router = Router();

router.get('/:freeCompanyId', getFcInfosById);

router.get('/', getFCInfos);

export default router;
