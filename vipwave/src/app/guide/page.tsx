// GuidePage.tsx
'use client';

//import { useRef } from 'react';
import { useGuide } from '@/hooks/useGuide';
import GuideTabs from '@/components/guide/guideTab';
import GuideSelector from '@/components/guide/guideSelector';
import GuideImage from '@/components/guide/guideImage';

export default function GuidePage() {
  const {
    selectedTab,
    currentGuide,
    imageLoaded,
    changeTab,
    changeGuide,
    handleImageLoad,
  } = useGuide();
  //const tabBarRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative min-w-full">
      <GuideTabs selectedTab={selectedTab} changeTab={changeTab} />
      <GuideSelector
        selectedTab={selectedTab}
        currentGuide={currentGuide}
        changeGuide={changeGuide}
      />
      <GuideImage
        images={currentGuide.images}
        imageLoaded={imageLoaded}
        handleImageLoad={handleImageLoad}
      />
    </div>
  );
}
