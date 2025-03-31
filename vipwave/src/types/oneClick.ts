export type DeviceType = 'ANDROID' | 'IPHONE' | 'IPAD' | 'WINDOWS' | 'MAC';

export interface LinkGroup {
  device_type: DeviceType;
  links: string[];
}

export type PlatformType = 'Melon' | 'Genie' | 'Bugs' | 'Vibe' | 'Flo';

export type ChartType = 'DOMESTIC' | 'GLOBAL';
export interface PlatformData {
  id: number;
  platform: PlatformType;
  logo: string;
  chart_type: ChartType;
  links: LinkGroup[];
  staff_no: string;
  update_at: string;
}

export type OneClickLinksResponse = {
  data: PlatformData[];
  code: number;
  message: string;
};

export const STAFF_CODE_MAP: Record<string, string> = {
  총대: 'MASTER',
  스탭1: 'STAFF1',
  스탭2: 'STAFF2',
  스탭3: 'STAFF3',
  스탭4: 'STAFF4',
  스탭5: 'STAFF5',
  스탭6: 'STAFF6',
  스탭7: 'STAFF7',
  스탭8: 'STAFF8',
  스탭9: 'STAFF9',
  스탭10: 'STAFF10',
  '디자인 스탭1': 'DESIGN1',
  '디자인 스탭2': 'DESIGN2',
  '디자인 스탭3': 'DESIGN3',
};
