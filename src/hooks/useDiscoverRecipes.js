import { useQuery } from "@tanstack/react-query";

import { getDiscoverRecipes } from "../api/recipeApi";

const useDiscoverRecipes = () => {
  const {
    data: recipes = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipes", "discover"],
    queryFn: getDiscoverRecipes,
  });

  return {
    recipes,
    isLoading,
    error: isError ? "Discover recipes could not be loaded" : null,
  };
};

export default useDiscoverRecipes;
