import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const PORT = `https://teched14-week-4-assignment.onrender.com`;
app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "this is the root route" });
});
