import axios from 'axios';

export async function getFreeCompanyInformations(FCName, serverName) {
  return await axios.get('/api/v1/freeCompany', {
    params: { FCName, serverName },
  });
}

export async function getMemberInformations() {
  return axios.get('/api/v1/member');
}
