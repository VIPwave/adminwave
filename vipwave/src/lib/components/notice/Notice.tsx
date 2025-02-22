"use client";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("ko");

export default function NoticeList(props: { title: string }) {
  const now = dayjs().tz("Asia/Seoul");

  const today = now.format("YYYY년 MM월 DD일");

  return (
    <>
      <div className="flex py-2 border-b border-gray-800 mt-10 px-2">
        <span className="font-bold grow">{props.title}</span>
        <span className="text-gray-500 text-xs flex items-center">{today}</span>
      </div>

      <div>
        <Notice
          title="헬퍼 모집 안내"
          url="https://x.com/bbvip00819/status/1891780223622054214?s=46"
        />
        <Notice
          title="HOME SWEET HOME(feat. 태양, 대성) 멜론 일간 1위 76일 기록"
          url="https://www.instagram.com/p/DF4KnxtBRgd/?igsh=MWU3YTFwOWZnZG52aA=="
        />
      </div>
    </>
  );
}

function Notice(props: { title: string; url: string }) {
  const { title, url } = props;

  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant="ghost"
      className="w-full flex justify-between items-center"
      onClick={handleClick}
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%-24px)]">
        {title}
      </span>
      <div className="w-5 h-5 flex justify-center items-center">
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </div>
    </Button>
  );
}
