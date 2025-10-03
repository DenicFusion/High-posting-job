let db = {
  groupName: "VIP Group",
  groupLink: "https://chat.whatsapp.com/xxxx",
  status: "open",
  membersCount: 20,
  maxMembers: 50,
  whatsappLink: "https://chat.whatsapp.com/xxxx"
};

export async function handler(event, context) {
  if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body);
    if (body.password !== "Denic123*") {
      return { statusCode: 403, body: JSON.stringify({ error: "Wrong password" }) };
    }
    db = { ...db, ...body };
    return { statusCode: 200, body: JSON.stringify({ success: true, ...db }) };
  }
  return { statusCode: 405, body: "Method Not Allowed" };
}
