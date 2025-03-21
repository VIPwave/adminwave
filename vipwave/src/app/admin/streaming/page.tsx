'use client';

import BlockBtn from '@/components/Button/BlockBtn';
import SelectBtn from '@/components/Button/SelectBtn';
import { useSelectedPlatform } from '@/hooks/useSelectedPlatform';
import { PLATFORM } from '@/lib/musicPlatformData';

const AdminStreamingPage = () => {
  const { selectedPlatform, selectPlatform } = useSelectedPlatform();

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

  return (
    <div className="flex flex-col gap-4 px-5 py-6">
      <div className="flex gap-4">
        {PLATFORM.map((platform) => (
          <SelectBtn
            key={platform}
            text={platform}
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
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white"
          disabled
        />
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white outline-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white"
          disabled
        />
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white outline-none"
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-chart px-4 py-2">추가</button>
      </div>
      <p>iOS</p>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white"
          disabled
        />
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white outline-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white"
          disabled
        />
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white outline-none"
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-chart px-4 py-2">추가</button>
      </div>
      <p>Windows</p>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white"
          disabled
        />
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white outline-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white"
          disabled
        />
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white outline-none"
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-chart px-4 py-2">추가</button>
      </div>
      <p>Mac</p>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white"
          disabled
        />
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white outline-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white"
          disabled
        />
        <input
          type="text"
          placeholder={`${selectedPlatform} 링크를 입력하세요`}
          className="px-4 py-2 w-full bg-chart text-white outline-none"
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-chart px-4 py-2">추가</button>
      </div>

      <div className="flex gap-2 justify-end items-center">
        <select className="px-4 py-2 bg-chart text-white outline-none">
          {staffOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="password"
          placeholder={'Password'}
          className="px-4 py-2 bg-chart text-white outline-none"
        />
      </div>
      <BlockBtn text="등록하기" onClick={() => console.log('등록버튼')} />
    </div>
  );
};

export default AdminStreamingPage;
