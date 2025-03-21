import { useState } from 'react';

export function useSelectedPlatform() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectPlatform = (platform: string) => {
    setSelected(platform);
  };

  const resetPlatform = () => {
    setSelected(null);
  };

  return {
    selectedPlatform: selected,
    selectPlatform,
    resetPlatform,
  };
}
