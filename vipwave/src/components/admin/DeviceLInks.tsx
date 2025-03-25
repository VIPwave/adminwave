'use client';

import { DeviceType, PlatformData } from '@/types/oneClick';

interface RenderLinkProps {
  deviceType: DeviceType;
  platformKey: string;
  oneClickForm: Record<string, PlatformData>;
  editedLinks: Record<string, Record<DeviceType, string[]>>;
  updateOneClickLink: (
    deviceType: DeviceType,
    index: number,
    value: string
  ) => void;
}

export const RenderLinksByDevice = ({
  deviceType,
  platformKey,
  oneClickForm,
  editedLinks,
  updateOneClickLink,
}: RenderLinkProps) => {
  const originalDevice = oneClickForm[platformKey]?.links.find(
    (d) => d.device_type === deviceType
  );
  const editedDevice = editedLinks[platformKey]?.[deviceType] || [];

  return editedDevice.map((editedLink, index) => (
    <div
      key={index}
      className="grid grid-cols-[1fr_auto_1fr] items-center gap-4"
    >
      <input
        type="text"
        value={originalDevice?.links[index] || ''}
        placeholder={originalDevice?.links[index] ? '' : '새 링크 입력해주세요'}
        className="px-4 py-2 w-full bg-chart text-white"
        disabled
      />
      <div className="text-center text-white">→</div>
      <input
        type="text"
        value={editedLink}
        placeholder={`${platformKey} ${deviceType.toLowerCase()} 링크`}
        onChange={(e) => updateOneClickLink(deviceType, index, e.target.value)}
        className="px-4 py-2 w-full bg-chart text-white outline-none"
      />
    </div>
  ));
};
