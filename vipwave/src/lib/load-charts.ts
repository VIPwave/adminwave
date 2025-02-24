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

let client: MongoClient | null = null;

async function getMongoClient() {
    if (!client) {
        client = new MongoClient(
          "mongodb+srv://service_readonly_db_user:8sGfklmdfABM72Cd@vipwave.lruc9.mongodb.net/?retryWrites=true&w=majority&appName=vipwave"
        );
        await client.connect();
    }
    return client;
}

export async function loadPosts() {
    const client = await getMongoClient();
    const db = client.db("music_charts");
    const collection = db.collection("charts");
    try {
        return (await collection.findOne({ id: "vip-wave" })) as unknown as ChartAgreegation || { agreegation: [] };
    } catch (e) {
        console.log("e =", e);
        return { agreegation: [] };
    }
}