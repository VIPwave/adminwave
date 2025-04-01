import ky from 'ky';

const apiClient = ky.create({
  prefixUrl: 'https://vipwave.kr/api/v1',
  headers: {
    'Cache-Control': 'no-cache',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;
