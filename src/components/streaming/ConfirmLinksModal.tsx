'use client';

import { devices } from '@/lib/constants/devices';
import { useOneClickStore } from '@/store/useOneClickStore';
import { DeviceType } from '@/types/oneClick';
import { ChangeEvent } from 'react';

interface ConfirmLinksModalProps {
  platformKey: string;
  selectedPlatform: string;
  password: string;
  staffNo: string;
  staffOptions: string[];
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeStaffNo: (e: ChangeEvent<HTMLSelectElement>) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmLinksModal = ({
  platformKey,
  selectedPlatform,
  password,
  staffNo,
  staffOptions,
  onChangePassword,
  onChangeStaffNo,
  onConfirm,
  onCancel,
}: ConfirmLinksModalProps) => {
  const { originalLinks, editedLinks } = useOneClickStore();

  const devicesWithChanges = devices
    .map((device) => {
      const edited = editedLinks[platformKey]?.[device] || [];
      const original = originalLinks[platformKey]?.[device] || [];
      const hasContent = edited.some(
        (link, i) => link.trim() || original[i]?.trim()
      );
      return hasContent ? ([device, edited] as [DeviceType, string[]]) : null;
    })
    .filter(Boolean) as [DeviceType, string[]][];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onCancel}
    >
      <div
        className="flex flex-col gap-5 bg-chart rounded-lg p-6 shadow-lg w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>아래 {selectedPlatform} 링크가 vipwave에 반영됩니다</h2>
        <div className="flex flex-col gap-2 text-xs bg-black p-3">
          {devicesWithChanges.length === 0 && (
            <p className="text-zinc-500">변경된 링크가 없습니다.</p>
          )}
          {devicesWithChanges.map(([device, edited]) => {
            const original =
              originalLinks[platformKey]?.[device as DeviceType] || [];

            return (
              <div key={device}>
                <p className="text-white font-semibold mb-1">{device}</p>
                {edited.map((editedLink, idx) => {
                  const fallback = original[idx] || '';
                  const final = editedLink.trim() || fallback;
                  return (
                    <div
                      key={idx}
                      className="bg-chart text-white px-3 py-1 mb-1 break-all"
                    >
                      {final}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <h2>비밀번호 확인</h2>
        <div className="flex gap-2 justify-center items-center">
          <div className="relative">
            <select
              className="w-full p-2 pr-10 bg-chart border text-white outline-none appearance-none"
              value={staffNo}
              onChange={onChangeStaffNo}
            >
              {staffOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white text-xs">
              ▼
            </div>
          </div>
          <input
            type="password"
            placeholder={'Password'}
            value={password}
            onChange={onChangePassword}
            className="px-4 py-2 bg-chart border text-white outline-none rounded-none"
          />
        </div>
        <div className="flex gap-3 justify-end">
          <button className="border px-4 py-2" onClick={onCancel}>
            취소
          </button>
          <button className="border px-4 py-2" onClick={onConfirm}>
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLinksModal;
