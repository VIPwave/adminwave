'use client';

import { DeviceType } from '@/types/oneClick';
import { useOneClickStore } from '@/store/useOneClickStore';

interface Props {
  deviceType: DeviceType;
  platformKey: string;
}

export const RenderLinksByDevice = ({ deviceType, platformKey }: Props) => {
  const { editedLinks, originalLinks, updateLink, removeLink } =
    useOneClickStore();

  const editedDeviceLinks = editedLinks[platformKey]?.[deviceType] || [];
  const originalDeviceLinks = originalLinks[platformKey]?.[deviceType] || [];

  return editedDeviceLinks.map((editedLink, index) => {
    const originalLink = originalDeviceLinks[index] || '';

    return (
      <div
        key={index}
        className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-4"
      >
        <input
          type="text"
          value={originalLink}
          placeholder={originalLink ? '' : '새 링크 입력해주세요'}
          className="px-4 py-2 w-full bg-chart text-white rounded-none outline-none"
          disabled
        />
        <div className="text-center text-white">→</div>
        <input
          type="text"
          value={editedLink}
          placeholder={`${platformKey} ${deviceType.toLowerCase()} 링크`}
          onChange={(e) =>
            updateLink(platformKey, deviceType, index, e.target.value)
          }
          className="px-4 py-2 w-full bg-chart text-white outline-none rounded-none"
        />
        <button
          className="text-center text-white"
          onClick={() => removeLink(platformKey, deviceType, index)}
        >
          X
        </button>
      </div>
    );
  });
};
