'use client';

import BlockBtn from '@/components/Button/BlockBtn';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function SupportPage() {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('카카오뱅크 3333-02-2695844').then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  return (
    <div>
      <p className="font-bold my-6 px-5 text-sm">아이디 기부</p>
      <div className="p-5 py-6 bg-chart overflow-hidden text-zinc-200 leading-6">
        <p className="mb-2">
          {' '}
          사용하지 않는{' '}
          <span className="color-primary font-bold">
            벅스/지니 아이디를 기부
          </span>
          받습니다.
        </p>
        빅뱅 음원총공팀은 더욱 효율적인 총공을 위해 기부받은 아이디로 다운로드
        및 총공을 진행합니다. <br />
        아이디가 많을수록 음원 차트 방어에 큰 도움이 됩니다. <br />
        더 자세한 내용은 아이디 기부 폼 내에 가이드가 첨부되어 있으니 참고
        부탁드립니다. <br />
        <p className="mt-2 text-zinc-400">
          * 벅스: 명의당 최대 3개 <br /> ** 지니: 30일에 명의당 최대 3개
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 w-full py-6 px-5">
        <BlockBtn
          text="벅스 아이디 기부"
          iconSrc="/icons/bugs.png"
          href="https://naver.me/FK5UPdR7"
        />
        <BlockBtn
          text="지니 아이디 기부"
          iconSrc="/icons/genie.png"
          href="https://naver.me/5ISL2v5E"
        />
      </div>
      <p className="font-bold my-5 px-5 text-sm">서포트 안내</p>
      <div className="p-5 py-6 bg-chart overflow-hidden text-zinc-200 leading-6">
        <p className="mb-2">
          <span className="color-primary font-bold">VIPWAVE</span>는{' '}
          <span className="color-primary font-bold">
            빅뱅 음원총공팀 자체제작 사이트
          </span>
          입니다.
        </p>
        빅뱅 음원총공팀은 음원 총공, 홍보, 사이트 제작 등 빅뱅의 음원 활동
        서포트를 진행하고있습니다.
        <br />
        VIP 여러분의 관심과 사랑은 음원 나누기, 페이백 비용, 서버 비용 등 음원
        활동 서포트에 사용됩니다.
        <br />
        많은 관심 부탁드립니다! <br />
        <div className="flex gap-1 my-2 cursor-pointer" onClick={handleCopy}>
          <Copy width={20} />
          <span className="color-primary font-bold underline underline-offset-[3px]">
            카카오뱅크 3333-02-2695844 ㅂㅈㅎ
          </span>
        </div>
        <p className="text-zinc-400">
          * 2만원 이상 모금해 주신 분들을 대상으로 활동 종료 후 정산 내역을
          공유드립니다.
        </p>
      </div>

      <div className="px-5 text-zinc-400">
        <div className="flex flex-row gap-5 py-6">
          <BlockBtn
            text="모금 폼 작성"
            iconSrc="/icons/icon.ico"
            href="https://naver.me/G65mvn7j"
          />
        </div>
      </div>
      {showToast && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 animate-fadeInOut">
          계좌번호가 복사되었습니다.
        </div>
      )}
    </div>
  );
}
