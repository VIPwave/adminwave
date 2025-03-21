'use client';

import SelectBtn from '@/components/Button/SelectBtn';
import { useSelectedPlatform } from '@/hooks/useSelectedPlatform';
import { PLATFORM } from '@/lib/musicPlatformData';

const AdminStreamingPage = () => {
  const { selectedPlatform, selectPlatform } = useSelectedPlatform();
  return (
    <div className="px-5 py-6">
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
      {selectedPlatform && <div className="text-white">{selectedPlatform}</div>}
    </div>
  );
};

export default AdminStreamingPage;
