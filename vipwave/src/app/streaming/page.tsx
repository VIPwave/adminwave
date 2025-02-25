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
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

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
    <div className="px-5">
      <p className="font-bold my-6 text-sm">원클릭 링크</p>
      <div className="flex justify-start flex-wrap w-full onclick-link-gap">
        {streamingLinks.map((site) => (
          <div
            key={site.name}
            className="flex px-4 items-center gap-4 bg-chart text-white text-[16px] w-[calc(50%-1.6vw)] h-[60px]"
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
      <p className="font-bold mt-8 text-sm">스트리밍 리스트</p>
      <p className="my-4 text-sm break-keep">
        원클릭 링크가 정상 작동 되지 않는 분들은 총공팀에 문의 후 아래 가이드에
        맞게 설정 후 재생목록을 생성해주세요.
      </p>
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-[550px]">
          {!imageLoaded && (
            <div className="absolute top-0 left-0 w-full bg-gray-300 animate-pulse"></div>
          )}
          <Image
            src={'/streamingList.jpeg'}
            alt="streamingList"
            width={550}
            height={1182}
            priority
            unoptimized
            className={`transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedSite && (
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-4 text-[16px]">
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
              <div className="text-sm text-center">
                {selectedSite.links.length}개의 링크를 순서대로 모두
                클릭해주세요
              </div>
            )}

            {selectedSite.links.length > 0 ? (
              <>
                <div className="grid grid-cols-2 gap-2">
                  {selectedSite.links.map((link, index) => (
                    <div
                      key={index}
                      onClick={() => handleButtonClick(link)}
                      className=" text-center border-solid border-[1.5px] border-white p-3  cursor-pointer"
                    >
                      {selectedSite.name} {index + 1}
                    </div>
                  ))}
                </div>
                <p className="text-zinc-400 text-xs text-center">
                  전체반복 ON / 랜덤재생 OFF / 중복곡 허용 / 캐싱적용 OFF
                </p>
              </>
            ) : (
              <div className="text-center text-xs">
                현재 기기에서 사용할 수 있는 링크가 없습니다
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
