'use client';

import { useGuide } from '@/hooks/useGuide';
import GuideSelector from '@/components/guide/guideSelector';
import GuideImage from '@/components/guide/guideImage';

const MusicGiftGuidePage = () => {
  const { currentGuide, imageLoaded, changeGuide, handleImageLoad } =
    useGuide();

  return (
    <div className="relative min-w-full">
      <GuideSelector
        selectedTab={'선물 가이드'}
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

export default MusicGiftGuidePage;
