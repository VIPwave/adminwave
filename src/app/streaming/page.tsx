'use client';

import { RenderLinksByDevice } from '@/components/streaming/DeviceLInks';
import SelectBtn from '@/components/Button/SelectBtn';
import { useSelectedPlatform } from '@/hooks/useSelectedPlatform';
import { PLATFORM_MAP, PLATFORM_REVERSE_MAP } from '@/lib/musicPlatformData';
import { DeviceType } from '@/types/oneClick';
import { ChangeEvent, useEffect, useState } from 'react';
import { useOneClickStore } from '@/store/useOneClickStore';
import submitOneClickLinks from '@/apis/patchOneClick';
import ConfirmLinksModal from '@/components/streaming/ConfirmModal';

export const devices: DeviceType[] = [
  'ANDROID',
  'IPHONE',
  'IPAD',
  'WINDOWS',
  'MAC',
];

const AdminStreamingPage = () => {
  const { selectedPlatform, selectPlatform } = useSelectedPlatform();
  const { initialize, oneClickForm, addLink } = useOneClickStore();
  const [password, setPassword] = useState('');
  const [staffNo, setStaffNo] = useState('총대');
  const [isOpen, setIsOpen] = useState(false);

  const platformKey = (
    PLATFORM_REVERSE_MAP[selectedPlatform] || selectedPlatform
  ).toLowerCase();

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
  };

  const handleSubmit = async () => {
    const success = await submitOneClickLinks({
      platformKey,
      password,
      staffNo,
    });

    if (success) window.location.reload();
  };

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col gap-4 px-5 py-6">
      <div>
        <p>1. 플랫폼 선택</p>
        <p>2. 추가: 버튼 누르고 링크 입력</p>
        <p>3. 수정: 수정할 링크 입력 / 수정하지 않는 링크는 비워두기</p>
        <p>4. 삭제: 우측 X 아이콘 클릭</p>
        <p>5. 저장: 본인 스탭No. 선택 + 패스워드 입력 후 등록</p>
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
            {new Date(
              oneClickForm[platformKey]?.updatedAt.replace(' ', 'T')
            ).toLocaleDateString('ko-KR', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
            })}{' '}
            {oneClickForm[platformKey]?.staffNo}
          </p>
        </div>
      </div>

      {devices.map((device) => (
        <div key={device} className="flex flex-col gap-4 mt-8">
          <div className="flex justify-between">
            <p>{device}</p>
            <button
              className="bg-chart px-4 py-1"
              onClick={() => addLink(platformKey, device)}
            >
              추가
            </button>
          </div>
          <RenderLinksByDevice deviceType={device} platformKey={platformKey} />
        </div>
      ))}

      <div className="flex mt-8 justify-end">
        <button
          className="bg-chart w-full py-3"
          onClick={() => setIsOpen(true)}
        >
          저장
        </button>
      </div>
      {isOpen && (
        <ConfirmLinksModal
          platformKey={platformKey}
          selectedPlatform={selectedPlatform}
          password={password}
          staffNo={staffNo}
          staffOptions={staffOptions}
          onChangePassword={onChangePassword}
          onChangeStaffNo={onChangeStaffNo}
          onConfirm={handleSubmit}
          onCancel={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminStreamingPage;
