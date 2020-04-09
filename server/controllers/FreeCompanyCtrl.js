const FFStore = require('../Store/FFStore');

async function getFCInfos(req, res) {
  try {
    const { FCName } = req.query;
    const fCInfos = await FFStore.fetchFreeCompanyInfos(FCName);
    res.json(fCInfos);
  } catch (e) {
    console.error(e);
  }
}

async function getFcInfosById(req, res) {
  try {
    const { freeCompanyId } = req.params;
    const fCInfos = await FFStore.fetchFreeCompanyInfosByID(freeCompanyId);
    res.json(fCInfos);
  } catch (e) {
    console.error(e);
  }
}

module.exports = { getFCInfos, getFcInfosById };
