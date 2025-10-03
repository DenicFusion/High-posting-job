export async function handler(event, context) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      groupName: "VIP Group",
      groupLink: "https://chat.whatsapp.com/xxxx",
      status: "open",
      membersCount: 20,
      maxMembers: 50,
      whatsappLink: "https://chat.whatsapp.com/xxxx"
    })
  };
  return response;
}
