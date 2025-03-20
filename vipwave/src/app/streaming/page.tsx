'use client';

import BlockBtn from '@/components/Button/BlockBtn';
import Modal from '@/lib/components/modal/modal';
import { getDeviceType } from '@/lib/detectDevice';
import { globalStreamingLinks, streamingLinks } from '@/lib/streamingLinks';
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
  links?: string[];
}

export default function StreamingPage() {
  const [selectedSite, setSelectedSite] = useState<{
    name: string;
    logo: string;
    links: string[];
    showDeviceType: boolean;
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

  const openModal = (site: streamingLink, showDeviceType: boolean) => {
    let links: string[] = [];

    if (showDeviceType) {
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
    } else {
      links = site.links || [];
      console.log(site.links);
    }

    setSelectedSite({
      name: site.name,
      logo: site.logo,
      links,
      showDeviceType,
    });
    console.log(selectedSite);
    setIsModalOpen(true);
  };

  const handleButtonClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="px-5">
      <p className="font-bold mt-6 mb-2 text-sm">원클릭 링크</p>
      <p className="my-4 text-sm break-keep">
        원클릭 링크를 실행하기 전, 아래 네 가지 항목을 모두 체크 후에
        담아주세요.
      </p>
      <p className="text-sm break-keep">☑️ 재생목록 비우기</p>
      <p className="text-sm break-keep">☑️ 중복곡 허용</p>
      <p className="text-sm break-keep">{`☑️ 설정 > "재생목록 맨끝에 추가" 변경`}</p>
      <p className="mb-4 text-sm break-keep">☑️ 음원 다운로드 파일 삭제</p>
      <div className="grid grid-cols-2 gap-5 w-full mb-8">
        {streamingLinks.map((site) => (
          <BlockBtn
            key={site.name}
            text={site.name}
            iconSrc={site.logo}
            onClick={() => openModal(site, true)}
          />
        ))}
      </div>

      <p className="font-bold text-sm mb-4 mt-8">해외 차트 스트리밍</p>
      <div className="grid grid-cols-2 gap-5 w-full mb-8">
        {globalStreamingLinks.map((site) => (
          <BlockBtn
            key={site.name}
            text={site.name}
            iconSrc={site.logo}
            onClick={() => openModal(site, false)}
          />
        ))}
      </div>
      <hr className="my-8" />
      <p className="font-bold text-sm">스트리밍 리스트</p>
      <p className="my-4 text-sm break-keep">
        원클릭 링크가 정상 작동 되지 않는 분들은 총공팀에 문의 후 아래 가이드에
        맞게 설정 후 재생목록을 생성해주세요.
      </p>
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-[550px] max-w-full">
          {!imageLoaded && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-300 animate-pulse" />
          )}
          <Image
            src={'/gdragon_playlist_ver3.jpeg'}
            alt="streamingList"
            width={550}
            height={500}
            priority
            className={`transition-opacity duration-500 object-cover ${
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
                className="rounded-lg"
                src={selectedSite.logo}
                alt={`${selectedSite.name} logo`}
                width={30}
                height={30}
                priority
                unoptimized
              />
              {selectedSite.name} 원클릭{' '}
              {selectedSite.showDeviceType && `(${deviceType})`}
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
                      className=" text-center border-solid border-[1.5px] border-white p-3 cursor-pointer"
                    >
                      {selectedSite.name} {index + 1}
                    </div>
                  ))}
                </div>
                {selectedSite.showDeviceType && (
                  <p className="text-zinc-400 text-xs text-center">
                    전체반복 ON / 랜덤재생 OFF / 중복곡 허용 / 캐싱적용 OFF
                  </p>
                )}
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
