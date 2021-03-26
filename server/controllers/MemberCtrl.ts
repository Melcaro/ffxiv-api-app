import express from 'express';
import * as FFStore from '../Store/FFStore';

export async function getMemberResults(
  req: express.Request,
  res: express.Response
) {
  try {
    const { memberName } = req.query;
    const memberResults = await FFStore.fetchMemberSearch(memberName);
    res.json(memberResults);
  } catch (e) {
    console.error(e);
  }
}

export async function getMemberInfos(
  req: express.Request,
  res: express.Response
) {
  try {
    const { memberId } = req.params;
    const memberInfos = await FFStore.fetchMemberInfos(memberId);
    res.json(memberInfos);
  } catch (e) {
    console.error(e);
  }
}
