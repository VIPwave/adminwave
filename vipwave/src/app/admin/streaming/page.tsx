'use client';

import { RenderLinksByDevice } from '@/components/admin/DeviceLInks';
import SelectBtn from '@/components/Button/SelectBtn';
import { useOneClickForm } from '@/hooks/admin/useOneClickForm';
import { useSelectedPlatform } from '@/hooks/useSelectedPlatform';
import { PLATFORM_MAP, PLATFORM_REVERSE_MAP } from '@/lib/musicPlatformData';
import { DeviceType } from '@/types/oneClick';

const AdminStreamingPage = () => {
  const devices: DeviceType[] = ['ANDROID', 'IPHONE', 'IPAD', 'WINDOWS', 'MAC'];
  const { selectedPlatform, selectPlatform } = useSelectedPlatform();
  const { oneClickForm, editedLinks, setEditedLinks } = useOneClickForm();
  const platformKey =
    PLATFORM_REVERSE_MAP[selectedPlatform] || selectedPlatform;

  const staffOptions = [
    '총대',
    '스탭1',
    '스탭2',
    '스탭3',
    '스탭4',
    '스탭5',
    '스탭6',
    '스탭7',
    '스탭8',
    '스탭9',
    '스탭10',
    '디자인 스탭1',
    '디자인 스탭2',
    '디자인 스탭3',
  ];

  const handleAddLink = (deviceType: DeviceType) => {
    setEditedLinks((prev) => {
      const prevLinks = prev[platformKey]?.[deviceType] || [];
      return {
        ...prev,
        [platformKey]: {
          ...prev[platformKey],
          [deviceType]: [...prevLinks, ''],
        },
      };
    });
  };

  const updateOneClickLink = (
    deviceType: DeviceType,
    index: number,
    value: string
  ) => {
    setEditedLinks((prev) => {
      const updated = [...(prev[platformKey]?.[deviceType] || [])];
      updated[index] = value;
      return {
        ...prev,
        [platformKey]: {
          ...prev[platformKey],
          [deviceType]: updated,
        },
      };
    });
  };

  return (
    <div className="flex flex-col gap-4 px-5 py-6">
      <div className="flex flex-wrap gap-4">
        {Object.keys(PLATFORM_MAP).map((platform) => (
          <SelectBtn
            key={platform}
            text={
              PLATFORM_MAP[platform as keyof typeof PLATFORM_MAP] || platform
            }
            onClick={() => selectPlatform(platform)}
            className={`${
              selectedPlatform === platform
                ? 'bg-white text-black'
                : 'bg-chart text-white'
            }`}
          />
        ))}
      </div>
      <p className="text-white text-lg">{selectedPlatform}</p>

      {devices.map((device) => (
        <div key={device} className="flex flex-col gap-4">
          <p>{device}</p>
          <RenderLinksByDevice
            deviceType={device}
            platformKey={platformKey}
            oneClickForm={oneClickForm}
            editedLinks={editedLinks}
            updateOneClickLink={updateOneClickLink}
          />
          <div className="flex justify-end">
            <button
              className="bg-chart px-4 py-1"
              onClick={() => handleAddLink(device)}
            >
              추가
            </button>
          </div>
        </div>
      ))}

      <div className="flex gap-2 justify-end items-center">
        <div className="relative">
          <select className="w-full p-2 pr-10 bg-chart text-white outline-none appearance-none">
            {staffOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white text-xs">
            ▼
          </div>
        </div>
        <input
          type="password"
          placeholder={'Password'}
          className="px-4 py-2 bg-chart text-white outline-none"
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-chart px-4 py-1"
          onClick={() => {
            console.log(oneClickForm);
          }}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default AdminStreamingPage;
