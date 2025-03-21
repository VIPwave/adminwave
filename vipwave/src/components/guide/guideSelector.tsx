import { Guide, TAB, FILTERS } from "@/lib/guideData";

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
  );
}
