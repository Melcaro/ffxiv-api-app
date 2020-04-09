require('dotenv').config();
const axios = require('axios');
const Formator = require('../utils/formatData');

const URL = 'https://xivapi.com';

async function fetchFreeCompanyInfosByID(freeCompanyId) {
  try {
    const { data: fCInfos } = await axios.get(
      `${URL}/freecompany/${freeCompanyId}`,
      {
        params: { data: 'FCM' },
      }
    );

    return Formator.formatData(fCInfos);
  } catch (e) {
    console.error(e);
  }
}

async function fetchFreeCompanyInfos(FCName) {
  try {
    const {
      data: { Results },
    } = await axios.get(`${URL}/freecompany/search`, {
      params: {
        name: FCName,
        private_key: process.env.PRIVATE_KEY,
      },
    });
    return Formator.formatResults(Results);
  } catch (e) {
    console.error(e);
  }
}

async function fetchMemberInfos(memberID) {
  try {
    const { data } = await axios.get(`${URL}/character/${memberID}`, {
      params: { data: 'AC,CJ,FC', private_key: process.env.PRIVATE_KEY },
    });
    console.log(data);
    const {
      achievements: { list },
      character: {
        activeclassjob: activeClassJob,
        bio,
        dc,
        freecompanyid: freeCompanyId,
        classjobs: classJobs,
        name: characterName,
        gearset: { attributes, classid, gear, level, jobid },
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
      freecompany: { name: freeCompanyName },
    } = Formator.formatData(data);

    const memberAchievements = list
      .sort((a, b) => b.Date - a.Date)
      .splice(0, 5);

    const gearSet = {
      gear: Formator.formatGearSet(gear),
      attributes,
      classid,
      level,
      jobid,
    };

    const characterInfos = {
      activeClassJob,
      bio,
      dc,
      freeCompanyId,
      characterName,
      classJobs,
      nameday,
      race,
      server,
      title,
      town,
      tribe,
      gender,
      grandCompany,
      guardianDeity,
      portrait,
      gearSet,
    };

    return {
      memberAchievements,
      characterInfos,
      freeCompanyName,
    };
  } catch (e) {
    console.error(e);
  }
}

async function fetchItemsInfos(itemID) {
  try {
    const { data } = await axios.get(`${URL}/item/${itemID}`, {
      params: {
        columns: 'ClassJobCategory.Name,Icon,Description,Name',
        snake_case: 1,
      },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  fetchFreeCompanyInfos,
  fetchFreeCompanyInfosByID,
  fetchMemberInfos,
  fetchItemsInfos,
};
