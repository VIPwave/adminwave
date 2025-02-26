"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface Guide {
  name: string;
  images: string[];
}

type TAB =
  | "스트리밍 가이드"
  | "음원 다운 가이드"
  | "뮤비 다운 가이드"
  | "선물 가이드"
  | "음악 나누기 가이드";

const TABS: TAB[] = [
  "스트리밍 가이드",
  "음원 다운 가이드",
  "뮤비 다운 가이드",
  "선물 가이드",
  "음악 나누기 가이드",
];

const FILTERS: Record<TAB, Guide[]> = {
  "스트리밍 가이드": [
    { name: "멜론", images: ["/melonGuide.png"] },
    { name: "지니", images: ["/genieGuide.png"] },
    { name: "벅스", images: ["/bugsGuide.png"] },
    { name: "FLO", images: ["/floGuide.png"] },
    { name: "VIBE", images: ["/vibeGuide.png"] },
    { name: "Spotify", images: ["/spotifyGuide.png", "/spotifyGuide2.png"] },
    { name: "Apple Music", images: ["/applemusicGuide.png"] },
    { name: "YouTube Music", images: ["/youtubemusicGuide.png"] },
    {
      name: "YouTube (PC / Mobile)",
      images: ["/youtube.jpeg"],
    },
  ],
  "음원 다운 가이드": [
    { name: "멜론 PC", images: ["/melonPcDownload.jpg"] },
    { name: "멜론 Mobile", images: ["/melonMobileDownload.jpg"] },
    { name: "지니 PC", images: ["/geniePcDownload.jpg"] },
    { name: "지니 Mobile", images: ["/genieMobileDownload.jpg"] },
    { name: "벅스 PC", images: ["/bugsPcDownload.jpg"] },
    { name: "벅스 Mobile", images: ["/bugsMobileDownload.jpg"] },
    { name: "VIBE", images: ["/vibeDownload.jpg"] },
    { name: "KAKAO", images: ["/kakaoDownload.jpg"] },
  ],
  "뮤비 다운 가이드": [
    { name: "멜론 캐시충전", images: ["/melonMVDownload.jpg"] },
    { name: "멜론 PC", images: ["/melonMVDownload3.jpg"] },
    { name: "멜론 Mobile", images: ["/melonMVDownload2.jpg"] },
    { name: "벅스 PC", images: ["/bugsMVDownload.jpg"] },
  ],
  "선물 가이드": [
    { name: "공지사항", images: ["/melonGift.jpg"] },
    { name: "멜론 Android", images: ["/melonAppGift.jpg"] },
    { name: "멜론 iOS", images: ["/meloniOSGift.jpg"] },
    { name: "멜론 PC", images: ["/melonPcGift.jpg"] },
  ],
  "음악 나누기 가이드": [{ name: "지니", images: ["/genieMusicShare.jpg"] }],
};

export default function GuidePage() {
  const tabBarRef = useRef<HTMLDivElement | null>(null);
  const [selectedTab, setSelectedTab] = useState<TAB>("스트리밍 가이드");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentGuide, setCurrentGuide] = useState<Guide>(
    FILTERS[selectedTab][0]
  );
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(
    new Array(currentGuide.images.length).fill(false)
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!tabBarRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - tabBarRef.current.offsetLeft);
    setScrollLeft(tabBarRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !tabBarRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabBarRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    tabBarRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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

  return (
    <div className="relative min-w-full">
      {/* 탭 */}
      <div
        ref={tabBarRef}
        className="overflow-x-auto [&::-webkit-scrollbar]:hidden mb-4"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        <div className="inline-flex gap-6 border-b whitespace-nowrap min-w-max mb-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => changeTab(tab)}
              className={`py-2 text-sm ${
                selectedTab === tab
                  ? "border-b-2 border-white font-bold"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {FILTERS[selectedTab].length > 1 &&
          FILTERS[selectedTab].map((guide, index) => (
            <button
              key={index}
              onClick={() => changeGuide(guide)}
              className={`px-4 py-2 ${
                guide.name === currentGuide.name
                  ? "bg-white text-black"
                  : "bg-chart text-white"
              }`}
            >
              {guide.name}
            </button>
          ))}
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        {currentGuide.images.map((img, index) => (
          <div
            key={index}
            className="relative w-[550px] h-auto max-w-full border shadow-lg overflow-hidden mb-6"
          >
            {/* 스켈레톤 UI */}
            {!imageLoaded[index] && (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-300 animate-pulse"></div>
            )}

            {/* 이미지 (로딩 완료 후 표시) */}
            <Image
              src={img}
              alt={`${currentGuide.name} 가이드`}
              width={550}
              height={600} // 기본 비율 유지
              className={`transition-opacity duration-500 object-cover ${
                imageLoaded[index] ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
