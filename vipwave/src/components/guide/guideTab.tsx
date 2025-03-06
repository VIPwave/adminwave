import { useRef, useState } from 'react';
import { TABS, TAB } from '@/lib/guideData';

interface GuideTabsProps {
  selectedTab: TAB;
  changeTab: (tab: TAB) => void;
}

export default function GuideTabs({ selectedTab, changeTab }: GuideTabsProps) {
  const tabBarRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  return (
    <div
      ref={tabBarRef}
      className="overflow-x-auto [&::-webkit-scrollbar]:hidden mb-4 cursor-grab"
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
                ? 'border-b-2 border-white font-bold'
                : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
