import { fetchOneClickLinks } from '@/apis/fetchOneClick';
import { DeviceType, PlatformData } from '@/types/oneClick';
import { create } from 'zustand';

interface OneClickState {
  oneClickForm: Record<string, PlatformData>;
  editedLinks: Record<string, Record<DeviceType, string[]>>;
  originalLinks: Record<string, Record<DeviceType, string[]>>;
  initialize: () => Promise<void>;
  updateLink: (
    platform: string,
    device: DeviceType,
    index: number,
    value: string
  ) => void;
  addLink: (platform: string, device: DeviceType) => void;
  removeLink: (platform: string, device: DeviceType, index: number) => void;
}

export const useOneClickStore = create<OneClickState>((set, get) => ({
  oneClickForm: {},
  editedLinks: {},
  originalLinks: {},
  staffNo: '',
  updatedAt: '',
  initialize: async () => {
    const data = await fetchOneClickLinks();
    const entries = (data?.data || []).reduce<Record<string, PlatformData>>(
      (acc, item) => {
        acc[item.platform.toLowerCase()] = item;
        return acc;
      },
      {}
    );

    const originalMap = {} as Record<string, Record<DeviceType, string[]>>;
    const editedMap = {} as Record<string, Record<DeviceType, string[]>>;

    Object.entries(entries).forEach(([platform, item]) => {
      const normalizedPlatform = platform.toLowerCase();

      originalMap[normalizedPlatform] = {} as Record<DeviceType, string[]>;
      editedMap[normalizedPlatform] = {} as Record<DeviceType, string[]>;

      item.links.forEach((group) => {
        originalMap[normalizedPlatform][group.deviceType] = [...group.links];
        editedMap[normalizedPlatform][group.deviceType] = group.links.map(
          () => ''
        );
      });
    });

    set({
      oneClickForm: entries,
      originalLinks: originalMap,
      editedLinks: editedMap,
    });
  },
  updateLink: (platform, device, index, value) => {
    const current = get().editedLinks[platform]?.[device] || [];
    const updated = [...current];
    updated[index] = value;

    set((state) => ({
      editedLinks: {
        ...state.editedLinks,
        [platform]: {
          ...state.editedLinks[platform],
          [device]: updated,
        },
      },
    }));
  },
  addLink: (platform, device) => {
    const current = get().editedLinks[platform]?.[device] || [];
    set((state) => ({
      editedLinks: {
        ...state.editedLinks,
        [platform]: {
          ...state.editedLinks[platform],
          [device]: [...current, ''],
        },
      },
      originalLinks: {
        ...state.originalLinks,
        [platform]: {
          ...state.originalLinks[platform],
          [device]: [...(state.originalLinks[platform]?.[device] || []), ''],
        },
      },
    }));
  },
  removeLink: (platform, device, index) => {
    const updatedEdited = [...(get().editedLinks[platform]?.[device] || [])];
    const updatedOriginal = [
      ...(get().originalLinks[platform]?.[device] || []),
    ];
    updatedEdited.splice(index, 1);
    updatedOriginal.splice(index, 1);

    set((state) => ({
      editedLinks: {
        ...state.editedLinks,
        [platform]: {
          ...state.editedLinks[platform],
          [device]: updatedEdited,
        },
      },
      originalLinks: {
        ...state.originalLinks,
        [platform]: {
          ...state.originalLinks[platform],
          [device]: updatedOriginal,
        },
      },
    }));
  },
}));
