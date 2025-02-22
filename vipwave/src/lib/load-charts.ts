// The following function is shared
// with getStaticProps and API routes
import { MongoClient } from "mongodb";
import { Song } from "./components/chart/ChartTable";

export type ChartAgreegation = {
    agreegation: Array<ChartItem>;
};
  
type ChartItem = {
    platform: string;
    type: string;
    items: Array<Song>;
    timestamp: string;
};

// from a `lib/` directory
export async function loadPosts() {
    const client = new MongoClient(
        "mongodb+srv://service_readonly_db_user:8sGfklmdfABM72Cd@cluster0.lruc9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    await client.connect();
    const db = client.db("music_charts");
    const collection = db.collection("charts");
    // NOTE: mongoDB의 Data이기 때문에, 임의로 캐스팅함.
    try {
        return (await collection.findOne({id: "vip-wave"})) as unknown as ChartAgreegation || { agreegation: [] };
    } catch(e) {
        console.log("e =", e)
        return { agreegation: [] };
    }
}