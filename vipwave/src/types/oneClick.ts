export type DeviceType = 'ANDROID' | 'IPHONE' | 'IPAD' | 'WINDOWS' | 'MAC';

export interface LinkGroup {
  device_type: DeviceType;
  links: string[];
}

export type PlatformType = 'Melon' | 'Genie' | 'Bugs' | 'Vibe' | 'Flo';

export type ChartType = 'DOMESTIC' | 'GLOBAL';
export interface PlatformData {
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
