'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Guide {
  name: string;
  images: string[];
}

const guideData: Guide[] = [
  { name: '멜론', images: ['/melonGuide.png'] },
  { name: '지니', images: ['/genieGuide.png'] },
  { name: '벅스', images: ['/bugsGuide.png'] },
  { name: 'FLO', images: ['/floGuide.png'] },
  { name: 'VIBE', images: ['/vibeGuide.png'] },
  { name: 'Spotify', images: ['/spotifyGuide.png', '/spotifyGuide2.png'] },
  { name: 'Apple Music', images: ['/applemusicGuide.png'] },
  { name: 'YouTube Music', images: ['/youtubemusicGuide.png'] },
  {
    name: 'YouTube (PC / Mobile)',
    images: ['/youtubePcGuide.jpg', '/youtubeMobileGuide.jpg'],
  },
];

export default function GuidePage() {
  const [currentGuide, setCurrentGuide] = useState<Guide>(guideData[0]); // 기본값: 멜론

  const changeGuide = (guide: Guide) => {
    setCurrentGuide(guide);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">스트리밍 가이드</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        {guideData.map((guide, index) => (
          <button
            key={index}
            onClick={() => changeGuide(guide)}
            className={`px-4 py-2 rounded-lg ${
              guide.name === currentGuide.name
                ? 'bg-[#666666] text-white'
                : 'bg-white text-black'
            }`}
          >
            {guide.name}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {currentGuide.images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`${currentGuide.name} 가이드`}
            width={400}
            height={400}
            className="border rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
