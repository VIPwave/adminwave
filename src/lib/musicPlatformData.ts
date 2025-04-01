export const PLATFORM_MAP = {
  Melon: '멜론',
  Genie: '지니',
  Bugs: '벅스',
  Vibe: '바이브',
  Flo: '플로',
};

export const PLATFORM_REVERSE_MAP = Object.fromEntries(
  Object.entries(PLATFORM_MAP).map(([en, ko]) => [ko, en])
);
