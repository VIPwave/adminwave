'use client';

import { fetchOneClickLinks } from '@/apis/fetchOneClick';
import SelectBtn from '@/components/Button/SelectBtn';
import { useSelectedPlatform } from '@/hooks/useSelectedPlatform';
import { PLATFORM_MAP, PLATFORM_REVERSE_MAP } from '@/lib/musicPlatformData';
import { DeviceType, PlatformData } from '@/types/oneClick';
import { useEffect, useState } from 'react';

const AdminStreamingPage = () => {
  const { selectedPlatform, selectPlatform } = useSelectedPlatform();
  const [oneClickForm, setOneClickForm] = useState<
    Record<string, PlatformData>
  >({});

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
      } catch (err) {
        console.error('데이터 불러오기 실패:', err);
      }
    };

    getData();
  }, []);

  const renderOneCLickLinkByDevice = (deviceType: DeviceType) => {
    const platformKey =
      PLATFORM_REVERSE_MAP[selectedPlatform] || selectedPlatform;

    const device = oneClickForm[platformKey]?.links.find(
      (d) => d.device_type === deviceType
    );
    return device?.links.map((link, index) => (
      <div
        key={index}
        className="grid grid-cols-[1fr_auto_1fr] items-center gap-4"
      >
        <input
          type="text"
          placeholder={`${link}`}
          className="px-4 py-2 w-full bg-chart text-white"
          disabled
        />
        <div className="text-center text-white">→</div>
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크`}
          className="px-4 py-2 w-full bg-chart text-white outline-none"
        />
      </div>
    ));
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
      <p>Android</p>
      {renderOneCLickLinkByDevice('ANDROID')}
      <div className="flex justify-end">
        <button className="bg-chart px-4 py-1">추가</button>
      </div>
      <p>iOS</p>
      {renderOneCLickLinkByDevice('IPHONE')}
      <div className="flex justify-end">
        <button className="bg-chart px-4 py-1">추가</button>
      </div>
      <p>iPAD</p>
      {renderOneCLickLinkByDevice('IPAD')}
      <div className="flex justify-end">
        <button className="bg-chart px-4 py-1">추가</button>
      </div>
      <p>Windows</p>
      {renderOneCLickLinkByDevice('WINDOWS')}
      <div className="flex justify-end">
        <button className="bg-chart px-4 py-1">추가</button>
      </div>
      <p>Mac</p>
      {renderOneCLickLinkByDevice('MAC')}
      <div className="flex justify-end">
        <button className="bg-chart px-4 py-1">추가</button>
      </div>

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
