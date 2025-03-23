export type DeviceType = 'ANDROID' | 'IOS' | 'WINDOWS' | 'MAC';

export interface LinkGroup {
  device_type: DeviceType;
  links: string[];
}

export interface PlatformData {
  name: string;
  logo: string;
  chart_type: 'DOMESTIC' | 'GLOBAL';
  links: LinkGroup[];
  staff_no: string;
  update_at: string;
}

export type OneClickLinksResponse = {
  data: PlatformData[];
  code: number;
  message: string;
};
