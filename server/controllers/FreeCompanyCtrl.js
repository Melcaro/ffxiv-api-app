const FFStore = require('../Store/FFStore');

async function getFCInfos(req, res) {
  try {
    const { FCName, serverName } = req.query;
    const fCInfos = await FFStore.fetchFreeCompanyInfos(FCName, serverName);
    res.json(fCInfos);
  } catch (e) {
    console.error(e);
  }
}

module.exports = { getFCInfos };
