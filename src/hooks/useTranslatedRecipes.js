import { useQuery } from "@tanstack/react-query";

import { translateTexts } from "../api/translationApi";
import useLanguage from "./useLanguage";

const useTranslatedRecipes = (recipes) => {
  const { language } = useLanguage();

  const recipeIds = recipes.map((recipe) => recipe.id).join("-");

  const { data: translatedRecipes } = useQuery({
    queryKey: ["recipes-translation", recipeIds, language],

    queryFn: async () => {
      const translations = await translateTexts(
        recipes.map((recipe) => recipe.title),
        "tr",
        "en",
      );

      return recipes.map((recipe, index) => ({
        ...recipe,
        translatedTitle: translations[index] ?? recipe.title,
      }));
    },

    enabled: language === "tr" && recipes.length > 0,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
  });

  if (language === "en") {
    return recipes;
  }

  return translatedRecipes ?? recipes;
};

export default useTranslatedRecipes;
