import { db } from "./server.js";

db.query(
  "CREATE TABLE IF NOT EXISTS feedback(id SERIAL PRIMARY KEY, name TEXT, location TEXT, how_did_you_find_us TEXT, your_thoughts TEXT );"
);

// dummy data
db.query(
  "INSERT INTO feedback (name, location, how_did_you_find_us, your_thoughts) VALUES ('Thor Odinson', 'Asgard', 'the competition set up to replace my wifes hair', 'bloody love this hammer, you guys are awesome')"
);

db.query(
  "INSERT INTO feedback (name, location, how_did_you_find_us, your_thoughts) VALUES ('Ivaldisons', 'Svartalfheimr', 'the competition', 'stealing our customers, this is ridiculous')"
);

db.query(
  "INSERT INTO feedback (name, location, how_did_you_find_us, your_thoughts) VALUES ('Bob', 'Fjordur', 'survivor notes', 'got some handy survival gear from you guys, great quality')"
);

db.query(
  "INSERT INTO feedback (name, location, how_did_you_find_us, your_thoughts) VALUES ('Odin Borrsson', 'Asgard', 'the competition', 'you have brought great wealth to my people with the incredible Draupnir, you have my eternal thanks')"
);
