"use client";

import Image from "next/image";
import { useState } from "react";

interface Guide {
  name: string;
  images: string[];
}

const guideData: Guide[] = [
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
];

export default function GuidePage() {
  const [currentGuide, setCurrentGuide] = useState<Guide>(guideData[0]); // 기본값: 멜론
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(
    new Array(currentGuide.images.length).fill(false)
  );

  const changeGuide = (guide: Guide) => {
    setCurrentGuide(guide);
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4 float-left">스트리밍 가이드</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        {guideData.map((guide, index) => (
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
