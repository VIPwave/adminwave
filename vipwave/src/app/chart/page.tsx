import Charts from "@/lib/components/chart/Charts";

export default function ChartPage() {
  return (
    <>
      <div className="p-4 bg-zinc-900 overflow-hidden">
        공지사항입니다공지사항입니다공지사항입니다공지사항입니다공지사항입니다공지사항입니다공지사항입니다공지사항입니다
      </div>
      <div className="p-4">
        멜론 TOP100
        <div>
          <Charts />
        </div>
      </div>
    </>
  );
}
