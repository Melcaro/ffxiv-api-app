const FFStore = require('../Store/FFStore');

async function getMemberResults(req, res) {
  try {
    const { memberName } = req.query;
    const memberResults = await FFStore.fetchMemberSearch(memberName);
    res.json(memberResults);
  } catch (e) {
    console.error(e);
  }
}

async function getMemberInfos(req, res) {
  try {
    const { memberId } = req.params;
    const memberInfos = await FFStore.fetchMemberInfos(memberId);
    res.json(memberInfos);
  } catch (e) {
    console.error(e);
  }
}

module.exports = { getMemberInfos, getMemberResults };
