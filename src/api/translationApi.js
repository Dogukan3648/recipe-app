import axios from "axios";

export const translateTexts = async (texts, target = "tr", source) => {
  const response = await axios.post("/api/translate", {
    texts,
    target,
    source,
  });

  return response.data.translations;
};
