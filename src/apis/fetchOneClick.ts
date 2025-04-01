import apiClient from '@/lib/apiClient';
import { OneClickLinksResponse } from '@/types/oneClick';

export const fetchOneClickLinks = async () => {
  try {
    const data = await apiClient.get<OneClickLinksResponse>('one-click');
    return data.json();
  } catch (error) {
    console.log(error);
  }
};
