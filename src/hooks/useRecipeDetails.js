import { useQuery } from "@tanstack/react-query";

import { getRecipeById } from "../api/recipeApi";

const useRecipeDetails = (id) => {
  const {
    data: recipe,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => getRecipeById(id),
    enabled: Boolean(id),
  });

  return {
    recipe,
    isLoading: isPending,
    error: isError ? "Recipe could not be loaded." : null,
  };
};

export default useRecipeDetails;
