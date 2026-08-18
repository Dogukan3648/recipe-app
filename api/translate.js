/* global process */

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({
      message: "Method not allowed",
    });
  }

  const { texts, target = "tr", source } = request.body;

  if (!Array.isArray(texts) || texts.length === 0) {
    return response.status(400).json({
      message: "Texts are required",
    });
  }

  try {
    const googleResponse = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: texts,
          ...(source && { source }),
          target,
          format: "text",
        }),
      },
    );

    if (!googleResponse.ok) {
      return response.status(googleResponse.status).json({
        message: "Translation request failed",
      });
    }

    const data = await googleResponse.json();

    const translations = data.data.translations.map(
      (translation) => translation.translatedText,
    );

    return response.status(200).json({
      translations,
    });
  } catch {
    return response.status(500).json({
      message: "Translation service unavailable",
    });
  }
}
