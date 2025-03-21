import { useState } from 'react';

export function useSelectedPlatform() {
  const [selected, setSelected] = useState<string>('멜론');

  const selectPlatform = (platform: string) => {
    setSelected(platform);
  };

  return {
    selectedPlatform: selected,
    selectPlatform,
  };
}
