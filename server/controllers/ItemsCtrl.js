const FFStore = require('../Store/FFStore');

async function getItemInfos(req, res) {
  try {
    const { itemID } = req.params;
    const itemInfos = await FFStore.fetchItemsInfos(itemID);
    console.log('item in ctrl', itemInfos);
    res.json(itemInfos);
  } catch (e) {
    console.error(e);
  }
}

module.exports = { getItemInfos };
