import axios from 'axios';

export async function getFreeCompanyInformations(FCName) {
  return axios.get('/api/v1/freeCompany', FCName);
}

export async function getMemberInformations() {
  return axios.get('/api/v1/member');
}
