import { useState } from 'react';

export function useSelectedPlatform() {
  const [selected, setSelected] = useState<string>('Melon');

  const selectPlatform = (platform: string) => {
    setSelected(platform);
  };

  return {
    selectedPlatform: selected,
    selectPlatform,
  };
}
