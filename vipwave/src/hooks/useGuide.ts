import { useState } from 'react';
import { TAB, FILTERS, Guide } from '@/lib/guideData';

export function useGuide() {
  const [selectedTab, setSelectedTab] = useState<TAB>('스트리밍 가이드');
  const [currentGuide, setCurrentGuide] = useState<Guide>(
    FILTERS[selectedTab][0]
  );
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(
    new Array(currentGuide.images.length).fill(false)
  );

  const changeTab = (tab: TAB) => {
    setSelectedTab(tab);
    setCurrentGuide(FILTERS[tab][0]);
    setImageLoaded(new Array(FILTERS[tab][0].images.length).fill(false));
  };

  const changeGuide = (guide: Guide) => {
    setCurrentGuide(guide);
    setImageLoaded(new Array(guide.images.length).fill(false));
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return {
    selectedTab,
    currentGuide,
    imageLoaded,
    changeTab,
    changeGuide,
    handleImageLoad,
  };
}
