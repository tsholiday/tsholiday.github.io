// netlify/functions/github-webhook.js

exports.handler = async (event, context) => {
  // Hanya terima method POST dari GitHub
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // 1. Ambil payload JSON dari GitHub
    const payload = JSON.parse(event.body);

    // 2. Baca data (Contoh: jika ada push)
    const repoName = payload.repository?.full_name;
    const pusher = payload.pusher?.name;

    console.log(`Ada Push ke Repo: ${repoName} oleh ${pusher}`);

    // [Di sini Anda bisa memanggil API OpenAI & Kirim ke WhatsApp]

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Payload berhasil diterima!" }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
