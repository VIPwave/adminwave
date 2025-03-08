'use client';

import GuideImage from '@/components/guide/guideImage';
import GuideSelector from '@/components/guide/guideSelector';
import { useGuide } from '@/hooks/useGuide';

const MVDownloadGuidePage = () => {
  const { currentGuide, imageLoaded, changeGuide, handleImageLoad } =
    useGuide();
  return (
    <div className="relative min-w-full">
      <GuideSelector
        selectedTab="뮤비 다운 가이드"
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
};

export default MVDownloadGuidePage;
