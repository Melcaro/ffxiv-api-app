require('dotenv').config();
const axios = require('axios');

const URL = 'https://xivapi.com';

async function fetchFreeCompanyInfos(FCName, serverName) {
  try {
    const {
      data: { Results },
    } = await axios.get(`${URL}/freecompany/search`, {
      params: {
        name: FCName,
        server: serverName,
        private_key: process.env.PRIVATE_KEY,
      },
    });
    const fCID = Results[0].ID;
    const { data: fCInfos } = await axios.get(`${URL}/freecompany/${fCID}`, {
      params: { data: 'FCM' },
    });
    return fCInfos;
  } catch (e) {
    console.error(e);
  }
}

async function fetchMemberInfos(memberID) {
  try {
    const {
      data: { Character },
    } = await axios.get(`${URL}/character/${memberID}`, {
      params: { private_key: process.env.PRIVATE_KEY },
    });
    return Character;
  } catch (e) {
    console.error(e);
  }
}

module.exports = { fetchFreeCompanyInfos, fetchMemberInfos };
