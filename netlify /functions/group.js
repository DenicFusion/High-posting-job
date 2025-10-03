const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    const dbPath = path.join(__dirname, "../../db.json");
    const raw = fs.readFileSync(dbPath);
    const data = JSON.parse(raw);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
