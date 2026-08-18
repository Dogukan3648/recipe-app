/* global process */

const ALLOWED_LANGUAGES = new Set(["en", "tr"]);
const MAX_TEXTS = 50;
const MAX_TOTAL_CHARACTERS = 10000;

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({
      message: "Method not allowed",
    });
  }

  const { texts, target = "tr", source } = request.body || {};

  if (!Array.isArray(texts) || texts.length === 0) {
    return response.status(400).json({
      message: "Texts are required",
    });
  }

  if (texts.length > MAX_TEXTS) {
    return response.status(400).json({
      message: "Too many texts",
    });
  }

  if (texts.some((text) => typeof text !== "string")) {
    return response.status(400).json({
      message: "All texts must be strings",
    });
  }

  const totalCharacters = texts.reduce((total, text) => total + text.length, 0);

  if (totalCharacters > MAX_TOTAL_CHARACTERS) {
    return response.status(400).json({
      message: "Text limit exceeded",
    });
  }

  if (!ALLOWED_LANGUAGES.has(target)) {
    return response.status(400).json({
      message: "Unsupported target language",
    });
  }

  if (source && !ALLOWED_LANGUAGES.has(source)) {
    return response.status(400).json({
      message: "Unsupported source language",
    });
  }

  if (!process.env.GOOGLE_TRANSLATE_API_KEY) {
    return response.status(500).json({
      message: "Translation service is not configured",
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
