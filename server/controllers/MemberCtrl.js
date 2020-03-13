const FFStore = require('../Store/FFStore');

async function getMemberInfos(req, res) {
  try {
    const { memberID } = req.query;
    const memberInfos = await FFStore.fetchMemberInfos(memberID);
    res.json(memberInfos);
  } catch (e) {
    console.error(e);
  }
}

module.exports = { getMemberInfos };
