import axios from 'axios';

export async function getFreeCompanyInformations(FCName, serverName) {
  return await axios.get('/api/v1/freeCompany', {
    params: { FCName, serverName },
  });
}

export async function getFreeCompanyById(freeCompanyId) {
  return await axios.get(`/api/v1/freeCompany/${freeCompanyId}`);
}

export async function getMemberInformations(memberID) {
  return axios.get('/api/v1/member', { params: { memberID } });
}

export async function getItemInformations(itemID) {
  return axios.get(`/api/v1/item/${itemID}`);
}
