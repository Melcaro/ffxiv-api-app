import axios from 'axios';

export function getFreeCompanyInformations(FCName) {
  return axios.get('/api/v1/freeCompany', {
    params: { FCName },
  });
}

export function getFreeCompanyById(freeCompanyId) {
  return axios.get(`/api/v1/freeCompany/${freeCompanyId}`);
}

export function getMemberInformations(memberId) {
  return axios.get(`/api/v1/member/${memberId}`);
}

export function getMembersSearchResults(memberName) {
  return axios.get('/api/v1/member', { params: { memberName } });
}
