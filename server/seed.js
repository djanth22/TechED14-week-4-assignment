import { db } from "./server.js";

db.query(
  "CREATE TABLE IF NOT EXISTS feedback(id SERIAL PRIMARY KEY, name TEXT, location TEXT, how_did_you_find_us TEXT, your_thoughts TEXT );"
);
