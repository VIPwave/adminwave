import Charts from "@/lib/components/chart/Charts";
import { loadPosts } from "@/lib/load-charts";
import { convertRedableChartType } from "@/lib/utils";

async function fetchData() {
  try {
    const result = await loadPosts();
    return result;
  } catch (e) {
    console.log("err= ", e);
  }
}

export default async function ChartPage() {
  const result = await fetchData();

  return (
    <>
      <div className="p-4 py-6 mb-4 flex justify-center items-center bg-chart overflow-hidden">
        전체반복 ON / 랜덤재생 OFF / 중복곡 허용 / 캐싱적용 OFF
      </div>
      {!result?.agreegation && (
        <div className="flex justify-center items-center h-[300px]">
          <span>데이터가 없습니다.</span>
        </div>
      )}
      {result &&
        result.agreegation.map((e, index) => (
          <div key={index}>
            <div className="mx-5 mt-4 mb-2">
              {convertRedableChartType(e.type)}
              <span className="float-right text-xs text-gray-500">
                {e.timestamp}
              </span>
            </div>
            <Charts items={e.items} />
          </div>
        ))}
    </>
  );
}

export const dynamic = "force-dynamic";
