import { fetchOneClickLinks } from '@/apis/fetchOneClick';
import { DeviceType, PlatformData } from '@/types/oneClick';
import { useEffect, useState } from 'react';

export const useOneClickForm = () => {
  const [oneClickForm, setOneClickForm] = useState<
    Record<string, PlatformData>
  >({});
  const [editedLinks, setEditedLinks] = useState<
    Record<string, Record<DeviceType, string[]>>
  >({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchOneClickLinks();
        const entries = (data?.data || []).reduce<Record<string, PlatformData>>(
          (acc, item) => {
            acc[item.platform] = item;
            return acc;
          },
          {}
        );
        setOneClickForm(entries);

        // 초기 editedLinks 세팅
        const edited: Record<string, Record<DeviceType, string[]>> = {};
        Object.entries(entries).forEach(([platform, platformData]) => {
          edited[platform] = {} as Record<DeviceType, string[]>;
          platformData.links.forEach((group) => {
            edited[platform][group.device_type] = group.links.map(() => '');
          });
        });
        setEditedLinks(edited);
      } catch (err) {
        console.error('데이터 불러오기 실패:', err);
      }
    };

    getData();
  }, []);

  return {
    oneClickForm,
    editedLinks,
    setEditedLinks,
  };
};
