import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { TAB, FILTERS, Guide } from '@/lib/guideData';

export function useGuide() {
  const path = usePathname();

  const tabMapping: Record<string, TAB> = {
    '/guide/streaming': '스트리밍 가이드',
    '/guide/musicDownload': '음원 다운 가이드',
    '/guide/mvDownload': '뮤비 다운 가이드',
    '/guide/musicGift': '선물 가이드',
    '/guide/musicShare': '음악 나누기 가이드',
    '/guide/broadcast': '음악방송 가이드',
  };

  const selectedTab = tabMapping[path] || '스트리밍 가이드';

  const [currentGuide, setCurrentGuide] = useState<Guide>(
    FILTERS[selectedTab][0]
  );
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(
    new Array(currentGuide.images.length).fill(false)
  );

  useEffect(() => {
    setCurrentGuide(FILTERS[selectedTab][0]);
    setImageLoaded(
      new Array(FILTERS[selectedTab][0].images.length).fill(false)
    );
  }, [selectedTab]);

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
    changeGuide,
    handleImageLoad,
  };
}
