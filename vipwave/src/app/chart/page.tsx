import Charts from "@/lib/components/chart/Charts";
import { Song } from "@/lib/components/chart/ChartTable";
import { convertRedableChartType } from "@/lib/utils";
import dayjs from "dayjs";
import { MongoClient } from "mongodb";

type ChartAgreegation = {
  agreegation: Array<ChartItem>;
};

type ChartItem = {
  platform: string;
  type: string;
  items: Array<Song>;
  timestamp: string;
};

export default async function ChartPage() {
  // TODO: 유틸성 method 분리 및 정리
  const client = new MongoClient(
    "mongodb+srv://service_readonly_db_user:8sGfklmdfABM72Cd@cluster0.lruc9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  await client.connect();
  const db = client.db("music_charts");
  const collection = db.collection("charts");
  // NOTE: mongoDB의 Data이기 때문에, 임의로 캐스팅함.
  const result: ChartAgreegation = (await collection.findOne({
    timestamp: dayjs().subtract(10, "m").format("YYYY.MM.DD HH:00"),
  })) as unknown as ChartAgreegation;

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
            <div className="mx-6 mt-4 mb-2">
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
