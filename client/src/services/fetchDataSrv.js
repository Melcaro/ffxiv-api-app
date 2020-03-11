import axios from 'axios';

export async function getFreeCompanyInformations() {
  return axios.get('/api/v1/freeCompany');
}

export async function getMemberInformations() {
  return axios.get('/api/v1/member');
}
