'use client';

import { RenderLinksByDevice } from '@/components/admin/DeviceLInks';
import SelectBtn from '@/components/Button/SelectBtn';
import { useSelectedPlatform } from '@/hooks/useSelectedPlatform';
import { PLATFORM_MAP, PLATFORM_REVERSE_MAP } from '@/lib/musicPlatformData';
import { DeviceType } from '@/types/oneClick';
import { ChangeEvent, useEffect, useState } from 'react';
import { useOneClickStore } from '@/store/useOneClickStore';
import submitOneClickLinks from '@/apis/patchOneClick';

const AdminStreamingPage = () => {
  const devices: DeviceType[] = ['ANDROID', 'IPHONE', 'IPAD', 'WINDOWS', 'MAC'];
  const { selectedPlatform, selectPlatform } = useSelectedPlatform();
  const { initialize, oneClickForm, addLink } = useOneClickStore();
  const [password, setPassword] = useState('');
  const [staff_no, setStaffNo] = useState('총대');

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

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeStaffNo = (e: ChangeEvent<HTMLSelectElement>) => {
    setStaffNo(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async () => {
    console.log('?');
    const success = await submitOneClickLinks({
      platformKey,
      password,
      staff_no,
    });

    if (success) window.location.reload();
  };

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div className="flex flex-col gap-4 px-5 py-6">
      <div>
        <p>1. 플랫폼 선택</p>
        <p>2. 추가: 버튼 누르고 링크 입력</p>
        <p>3. 수정: 수정할 링크 입력 / 수정하지 않는 링크는 비워두기</p>
        <p>4. 삭제: 우측 X 아이콘 클릭</p>
        <p>5. 본인 스탭No. 선택 + 패스워드 입력 후 등록</p>
      </div>
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
      <div className="flex justify-between items-baseline">
        <p className="text-white text-lg">{selectedPlatform}</p>
        <div>
          <p className="text-zinc-400 text-xs">
            최종 수정:{' '}
            {new Date(oneClickForm[platformKey].update_at)
              .toLocaleDateString('ko-KR', {
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
              })
              .replaceAll(' ', '')
              .replaceAll('.', '.')}{' '}
            {oneClickForm[platformKey].staff_no}
          </p>
        </div>
      </div>

      {devices.map((device) => (
        <div key={device} className="flex flex-col gap-4">
          <p>{device}</p>
          <RenderLinksByDevice deviceType={device} platformKey={platformKey} />
          <div className="flex justify-end">
            <button
              className="bg-chart px-4 py-1"
              onClick={() => addLink(platformKey, device)}
            >
              추가
            </button>
          </div>
        </div>
      ))}

      <div className="flex gap-2 justify-end items-center">
        <div className="relative">
          <select
            className="w-full p-2 pr-10 bg-chart text-white outline-none appearance-none"
            value={staff_no}
            onChange={onChangeStaffNo}
          >
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
          value={password}
          onChange={onChangePassword}
          className="px-4 py-2 bg-chart text-white outline-none"
        />
      </div>

      <div className="flex justify-end">
        <button className="bg-chart px-4 py-1" onClick={handleSubmit}>
          등록
        </button>
      </div>
    </div>
  );
};

export default AdminStreamingPage;
