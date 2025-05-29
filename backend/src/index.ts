import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const client = new MongoClient(process.env.MONGODB_URI!);

app.use(cors());
app.use(express.json());

async function main() {
  try {
    await client.connect();
    console.log("MongoDB connected");

    const db = client.db("Cookie");
    const itemsCollection = db.collection("items");

    // GET route
    app.get("/Cookie/items", async (req, res) => {
      const items = await itemsCollection.find().toArray();
      res.json(items);
    });

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

main();
