import axios from 'axios';

export async function getFreeCompanyInformations(FCName) {
  return await axios.get('/api/v1/freeCompany', {
    params: { FCName },
  });
}

export async function getFreeCompanyById(freeCompanyId) {
  return await axios.get(`/api/v1/freeCompany/${freeCompanyId}`);
}

export async function getMemberInformations(memberId) {
  return axios.get(`/api/v1/member/${memberId}`);
}

export async function getMembersSearchResults(memberName) {
  return await axios.get('/api/v1/member', { params: { memberName } });
}
