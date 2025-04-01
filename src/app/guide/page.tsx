'use client';

import { useGuide } from '@/hooks/useGuide';
import GuideSelector from '@/components/guide/guideSelector';
import GuideImage from '@/components/guide/guideImage';

export default function GuidePage() {
  const {
    selectedTab,
    currentGuide,
    imageLoaded,
    changeGuide,
    handleImageLoad,
  } = useGuide();

  return (
    <div className="relative min-w-full">
      {/* <GuideTabs selectedTab={selectedTab} changeTab={changeTab} /> */}
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
