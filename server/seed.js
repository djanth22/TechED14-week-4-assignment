import { db } from "./server.js";

db.query(
  "CREATE TABLE IF NOT EXISTS pets(id SERIAL PRIMARY KEY, name TEXT, location TEXT, favourite_colour TEXT, favourite_animal TEXT );"
);
