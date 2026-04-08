export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  await fetch("https://discordapp.com/api/webhooks/1491468305154969620/YJjKib9fM27ldIFSO4r3uxM5-Oy6Z9WkLjAMj7eSggkiG3AaflVQDqFMNfhv4Pntc_4U", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: "hello from vercel site"
    })
  });

  res.status(200).send("sent");
}
