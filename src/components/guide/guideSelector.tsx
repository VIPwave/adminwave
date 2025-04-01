import { Guide, TAB, FILTERS } from '@/lib/guideData';
import SelectBtn from '../Button/SelectBtn';

interface GuideSelectorProps {
  selectedTab: TAB;
  currentGuide: Guide;
  changeGuide: (guide: Guide) => void;
}

export default function GuideSelector({
  selectedTab,
  currentGuide,
  changeGuide,
}: GuideSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {FILTERS[selectedTab].length > 1 &&
        FILTERS[selectedTab].map((guide, index) => (
          <SelectBtn
            key={index}
            onClick={() => changeGuide(guide)}
            className={`${
              guide.name === currentGuide.name
                ? 'bg-white text-black'
                : 'bg-chart text-white'
            }`}
            text={guide.name}
          />
        ))}
    </div>
  );
}
