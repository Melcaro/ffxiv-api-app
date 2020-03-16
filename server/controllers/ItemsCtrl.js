const FFStore = require('../Store/FFStore');

async function getItemInfos(req, res) {
  try {
    console.log('req', req);
  } catch (e) {
    console.error(e);
  }
}

module.exports = { getItemInfos };
