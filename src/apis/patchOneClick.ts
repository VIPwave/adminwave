import apiClient from '@/lib/apiClient';
import { useOneClickStore } from '@/store/useOneClickStore';
import { DeviceType, STAFF_CODE_MAP } from '@/types/oneClick';
import { HTTPError } from 'ky';

interface SubmitOneClickLinkProps {
  platformKey: string;
  password: string;
  staff_no: string;
}

const submitOneClickLinks = async ({
  platformKey,
  password,
  staff_no,
}: SubmitOneClickLinkProps) => {
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
      headers: {
        'X-ADMIN-CODE': password,
        'X-STAFF-NO': STAFF_CODE_MAP[staff_no],
      },
    });

    if (res.ok) {
      alert('링크가 성공적으로 등록되었습니다!');
    } else {
      alert('등록 중 오류가 발생했습니다.');
    }

    return true;
  } catch (err) {
    if (err instanceof HTTPError) {
      const status = err.response.status;

      if (status === 403) {
        alert('비밀번호가 틀렸습니다.');
      } else {
        alert('등록 실패');
      }
    } else {
      console.log(err);
    }
  }
};

export default submitOneClickLinks;
