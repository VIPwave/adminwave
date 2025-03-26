"use client";

import IconButton from "@/components/ui/IconButton";
import SupportForm from "@/lib/components/support/SupportForm";
import { Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SupportPage() {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("카카오뱅크 3333-02-2695844").then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  return (
    <div className="mt-5">
      <SupportForm
        title="[대성 컴백 대비] 총공 이벤트용 기부/모금"
        button={
          <Link
            href={"https://naver.me/GL8kPDZ2"}
            target="_blank"
            className="flex w-full gap-4 px-4 py-3 items-center bg-chart text-white text-[16px] min-h-[60px] whitespace-normal break-words leading-tight"
          >
            <Image
              src={"/icons/icon.ico"}
              alt={`vipwave logo`}
              width={30}
              height={30}
              priority
              unoptimized
            />
            참여 신청
          </Link>
        }
      >
        <>
          <p className="mb-2">
            4월 8일 발매 예정인{" "}
            <span className="text-primary font-bold">
              대성 신곡 음원 서포트
            </span>
            를 위해
            <br />
            빅뱅음총팀에서 스밍 다운 독려를 위한 이벤트를 준비하고 있습니다.
          </p>
          많은 분들이 참여하고 싶은 이벤트를 준비하기 위해,
          <br /> 운영비 모금 및 상품 기부를 진행하니 많은 관심 부탁드립니다!{" "}
          <p className="mt-2">
            ✅ 참여 타입 : 모금 / 기프티콘 기부 / 굿즈 기부
          </p>
        </>
      </SupportForm>
      <SupportForm
        title="아이디 기부"
        button={
          <>
            <Link
              className="flex w-full gap-4 px-4 py-3 items-center bg-chart text-white text-[16px] min-h-[60px]"
              href={"https://naver.me/FK5UPdR7"}
              target="_blank"
            >
              <Image
                className="rounded-lg"
                src={"/icons/bugs.png"}
                alt={`bugs logo`}
                width={30}
                height={30}
                priority
                unoptimized
              />
              벅스 아이디 기부
            </Link>
            <Link
              className="flex w-full gap-4 px-4 py-3 items-center bg-chart text-white text-[16px] min-h-[60px] whitespace-normal break-words leading-tight"
              href={"https://naver.me/5ISL2v5E"}
              target="_blank"
            >
              <Image
                className="rounded-lg"
                src={"/icons/genie.png"}
                alt={`genie logo`}
                width={30}
                height={30}
                priority
                unoptimized
              />
              지니 아이디 기부
            </Link>
          </>
        }
      >
        <p className="mb-2">
          사용하지 않는
          <span className="text-primary font-bold">
            {" "}
            벅스/지니 아이디를 기부
          </span>
          받습니다.
        </p>
        빅뱅 음원총공팀은 더욱 효율적인 총공을 위해 기부받은 아이디로 다운로드
        및 총공을 진행합니다. <br />
        아이디가 많을수록 음원 차트 방어에 큰 도움이 됩니다. <br />
        더 자세한 내용은 아이디 기부 폼 내에 가이드가 첨부되어 있으니 참고
        부탁드립니다. <br />
        <p className="mt-2 text-secondary">
          * 벅스: 명의당 최대 3개 <br /> ** 지니: 30일에 명의당 최대 3개
        </p>
      </SupportForm>
      <SupportForm
        title="서포트 안내"
        button={
          <Link
            href={"https://naver.me/GL8kPDZ2"}
            target="_blank"
            className="flex w-full gap-4 px-4 py-3 items-center bg-chart text-white text-[16px] min-h-[60px] whitespace-normal break-words leading-tight"
          >
            <Image
              className="rounded-lg"
              src={"/icons/icon.ico"}
              alt={`vipwave logo`}
              width={30}
              height={30}
              priority
              unoptimized
            />
            모금 폼 작성
          </Link>
        }
      >
        <>
          <p className="mb-2">
            <span className="text-primary font-bold">VIPWAVE</span>는
            <span className="text-primary font-bold">
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
            <IconButton
              className="w-[14px] h-[14px] p-0 pt-[4px]"
              onClick={handleCopy}
            >
              <Copy style={{ width: "12px", height: "12px" }} />
            </IconButton>
            <span className="color-primary font-bold underline underline-offset-[3px]">
              카카오뱅크 3333-02-2695844 ㅂㅈㅎ
            </span>
          </div>
          <p className="text-secondary">
            * 2만원 이상 모금해 주신 분들을 대상으로 활동 종료 후 정산 내역을
            공유드립니다.
          </p>
          {showToast && (
            <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 animate-fadeInOut">
              계좌번호가 복사되었습니다.
            </div>
          )}
        </>
      </SupportForm>
    </div>
  );
}
