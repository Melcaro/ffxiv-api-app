import express from 'express';
import * as FFStore from '../Store/FFStore';

export async function getFCInfos(req: express.Request, res: express.Response) {
  try {
    const { FCName } = req.query;
    const fCInfos = await FFStore.fetchFreeCompanyInfos(FCName);
    res.json(fCInfos);
  } catch (e) {
    console.error(e);
  }
}

export async function getFcInfosById(
  req: express.Request,
  res: express.Response
) {
  try {
    const { freeCompanyId } = req.params;
    const fCInfos = await FFStore.fetchFreeCompanyInfosByID(freeCompanyId);
    res.json(fCInfos);
  } catch (e) {
    console.error(e);
  }
}
