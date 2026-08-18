import { useQuery } from "@tanstack/react-query";

import { translateTexts } from "../api/translationApi";
import useLanguage from "./useLanguage";

const useTranslatedRecipe = (recipe) => {
  const { language } = useLanguage();

  const { data: translatedRecipe } = useQuery({
    queryKey: ["recipe-translation", recipe?.id, language],

    queryFn: async () => {
      const fields = [
        { key: "title", value: recipe.title },
        { key: "area", value: recipe.area },
        { key: "instructions", value: recipe.instructions },
      ];

      recipe.ingredients.forEach((ingredient, index) => {
        fields.push({
          key: `ingredient-${index}-name`,
          value: ingredient.name,
        });
        if (ingredient.measure) {
          fields.push({
            key: `ingredient-${index}-measure`,
            value: ingredient.measure,
          });
        }
      });

      const translations = await translateTexts(
        fields.map((field) => field.value),
        "tr",
        "en",
      );

      const translatedFields = Object.fromEntries(
        fields.map((field, index) => [field.key, translations[index]]),
      );
      return {
        ...recipe,

        title: translatedFields.title ?? recipe.title,
        area: translatedFields.area ?? recipe.area,
        instructions: translatedFields.instructions ?? recipe.instructions,
        ingredients: recipe.ingredients.map((ingredient, index) => ({
          name: translatedFields[`ingredient-${index}-name`] ?? ingredient.name,

          measure:
            translatedFields[`ingredient-${index}-measure`] ??
            ingredient.measure,
        })),
      };
    },

    enabled: language === "tr" && Boolean(recipe),
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
  });

  if (language === "en") {
    return recipe;
  }

  return translatedRecipe ?? recipe;
};

export default useTranslatedRecipe;
