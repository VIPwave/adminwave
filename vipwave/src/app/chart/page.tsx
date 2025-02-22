import Charts from "@/lib/components/chart/Charts";
import { Song } from "@/lib/components/chart/ChartTable";
import { convertRedableChartType } from "@/lib/utils";
import dayjs from "dayjs";
import { MongoClient } from "mongodb";

type ChartAgreegation = {
  agreegation: Array<ChartItem>
}

type ChartItem = {
  platform: string,
  type: string,
  items: Array<Song>
}

export default async function ChartPage() {
  // TODO: 유틸성 method 분리 및 정리
  const client = new MongoClient("mongodb+srv://service_readonly_db_user:8sGfklmdfABM72Cd@cluster0.lruc9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  await client.connect();
  const db = client.db("music_charts");
  const collection = db.collection('charts');
  // NOTE: mongoDB의 Data이기 때문에, 임의로 캐스팅함.
  const result: ChartAgreegation = await collection.findOne({ timestamp: dayjs().subtract(10, 'm').format("YYYY.MM.DD HH:00") }) as unknown as ChartAgreegation

  
  return (
    <>
      <div className="p-4 bg-zinc-900 overflow-hidden">
        공지사항입니다.
      </div>      
        {result.agreegation.map((e, index) => (
              <>
                <div key={index} className="p-4">
                  {convertRedableChartType(e.type)}
                  <Charts key={index} items={e.items} />
                </div>
              </>
            )
          )
        }
    </>
  );
}
