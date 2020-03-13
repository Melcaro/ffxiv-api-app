require('dotenv').config();
const axios = require('axios');
const Formator = require('../utils/formatData');

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
    return Formator.formatData(fCInfos);
  } catch (e) {
    console.error(e);
  }
}

async function fetchMemberInfos(memberID) {
  try {
    const { data } = await axios.get(`${URL}/character/${memberID}`, {
      params: { data: 'AC,MIMO,CJ,FC', private_key: process.env.PRIVATE_KEY },
    });
    const newData = Formator.formatData(data);
    const {
      achievements: { list },
      character: {
        activeclassjob: activeClassJob,
        bio,
        dc,
        classjobs: classJobs,
        name: characterName,
        gearset: gearSet,
        nameday,
        race,
        server,
        title,
        town,
        tribe,
        gender,
        portrait,
        grandcompany: grandCompany,
        guardiandeity: guardianDeity,
      },
      minions,
      mounts,
      freecompany: { name: freeCompanyName },
    } = newData;
    const memberAchievements = list
      .sort((a, b) => b.Date - a.Date)
      .splice(0, 5);
    const characterInfos = {
      activeClassJob,
      bio,
      dc,
      characterName,
      classJobs,
      gearSet,
      nameday,
      race,
      server,
      title,
      town,
      tribe,
      gender,
      grandCompany,
      guardianDeity,
      portrait
    };
    return {
      memberAchievements,
      characterInfos,
      minions,
      mounts,
      freeCompanyName,
    };
  } catch (e) {
    console.error(e);
  }
}

module.exports = { fetchFreeCompanyInfos, fetchMemberInfos };
