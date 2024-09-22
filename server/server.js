import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
export const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "this is the root route" });
});

app.get("/feedback", async (req, res) => {
  const data = await db.query(`SELECT * FROM feedback`);
  console.log(data.rows);

  res.json(data.rows);
});

app.post("/newFeedback", (req, res) => {
  const bodyData = req.body;
  res.json({ message: "feedback" });
  console.log(bodyData);

  db.query(
    `INSERT INTO feedback (name, location, how_did_you_find_us, your_thoughts) VALUES ($1, $2, $3, $4)`,
    [
      bodyData.formValues.name,
      bodyData.formValues.location,
      bodyData.formValues.how_did_you_find_us,
      bodyData.formValues.your_thoughts,
    ]
  );
});
