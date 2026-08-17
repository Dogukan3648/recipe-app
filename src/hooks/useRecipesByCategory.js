import { useQuery } from "@tanstack/react-query";

import { getRecipesByCategory } from "../api/recipeApi";

const useRecipesByCategory = (category) => {
  const {
    data: recipes = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["recipes", "category", category],
    queryFn: () => getRecipesByCategory(category),
    enabled: Boolean(category),
  });
  return {
    recipes,
    isLoading: isPending,
    error: isError ? "Recipes could not be loaded" : null,
  };
};

export default useRecipesByCategory;
