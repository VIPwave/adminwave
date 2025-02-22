'use client';

import Modal from '@/lib/components/modal/modal';
import { getDeviceType } from '@/lib/detectDevice';
import { streamingLinks } from '@/lib/streamingLinks';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface streamingLink {
  name: string;
  logo: string;
  androidLinks?: string[];
  iphoneLinks?: string[];
  ipadLinks?: string[];
  windowLinks?: string[];
  macLinks?: string[];
}

export default function StreamingPage() {
  const [selectedSite, setSelectedSite] = useState<{
    name: string;
    logo: string;
    links: string[];
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deviceType, setDeviceType] = useState<string>('');

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  const openModal = (site: streamingLink) => {
    let links: string[] = [];

    if (deviceType === 'Android') {
      links = site.androidLinks || [];
    } else if (deviceType === 'iOS') {
      links = site.iphoneLinks || [];
    } else if (deviceType === 'iPad') {
      links = site.ipadLinks || [];
    } else if (deviceType === 'Windows') {
      links = site.windowLinks || [];
    } else if (deviceType === 'Mac') {
      links = site.macLinks || [];
    }

    setSelectedSite({ name: site.name, logo: site.logo, links });
    setIsModalOpen(true);
  };

  const handleButtonClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-y-4 px-5 py-10 justify-center items-center">
        {streamingLinks.map((site) => (
          <div
            key={site.name}
            className="flex px-4 items-center gap-4 bg-[#ffffffaa] text-black text-[16px] w-40 rounded-[6px] h-[50px]"
            onClick={() => openModal(site)}
          >
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={30}
              height={30}
              priority
              unoptimized
            />
            {site.name}
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={'/streamingList.jpeg'}
          alt="streamingList"
          width={550}
          height={1182}
          priority
          unoptimized
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedSite && (
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-4 text-[16px] text-black">
              <Image
                src={selectedSite.logo}
                alt={`${selectedSite.name} logo`}
                width={30}
                height={30}
                priority
                unoptimized
              />
              {selectedSite.name} 원클릭 ({deviceType})
            </div>

            {selectedSite.links.length > 1 && (
              <div className="text-black text-[14px] px-2">
                {selectedSite.links.length}개의 링크를 순서대로 모두
                클릭해주세요
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              {selectedSite.links.length > 0 ? (
                selectedSite.links.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(link)}
                    className="text-black text-center border-solid border-[1.5px] border-[#6c6c6c] p-3 rounded-[16px] cursor-pointer hover:bg-gray-200 transition"
                  >
                    {selectedSite.name} {index + 1}
                  </button>
                ))
              ) : (
                <div className="text-center text-black">
                  해당 기기에서 사용할 수 있는 링크가 없습니다.
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
