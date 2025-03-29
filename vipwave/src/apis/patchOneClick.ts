import apiClient from '@/lib/apiClient';
import { useOneClickStore } from '@/store/useOneClickStore';
import { DeviceType } from '@/types/oneClick';

const submitOneClickLinks = async (platformKey: string) => {
  const { oneClickForm, editedLinks, originalLinks } =
    useOneClickStore.getState();

  const platformData = oneClickForm[platformKey];
  if (!platformData) return alert('플랫폼 데이터 없음');

  const patchBody = Object.entries(editedLinks[platformKey] || {})
    .map(([device, edited]) => {
      const original = originalLinks[platformKey]?.[device as DeviceType] || [];

      const finalLinks = edited.reduce<string[]>((acc, editedLink, idx) => {
        const originalLink = original[idx] || '';
        if (editedLink.trim() === '' && originalLink.trim() === '') {
          return acc;
        }
        acc.push(editedLink.trim() === '' ? originalLink : editedLink);
        return acc;
      }, []);

      if (finalLinks.length === 0) return null;

      return {
        device_type: device,
        links: finalLinks,
      };
    })
    .filter(Boolean);

  try {
    const res = await apiClient.patch(`one-click/${platformData.id}`, {
      json: patchBody,
    });

    if (res.ok) {
      alert('링크가 성공적으로 등록되었습니다!');
    } else {
      alert('등록 중 오류가 발생했습니다.');
    }
  } catch (err) {
    console.log(err);
    alert('등록 실패');
  }
};

export default submitOneClickLinks;
