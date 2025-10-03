const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  try {
    const { password, ...payload } = JSON.parse(event.body);

    if (password !== "admin123") {
      return {
        statusCode: 403,
        body: JSON.stringify({ error: "Invalid password" })
      };
    }

    const dbPath = path.join(__dirname, "../../db.json");
    fs.writeFileSync(dbPath, JSON.stringify(payload, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
