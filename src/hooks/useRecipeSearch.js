import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { searchRecipes } from "../api/recipeApi";

const useRecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const {
    data: recipes = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipes", "search", debouncedSearchTerm],
    queryFn: () => searchRecipes(debouncedSearchTerm),
    enabled: Boolean(debouncedSearchTerm),
  });

  return {
    recipes,
    searchTerm,
    setSearchTerm,
    isLoading,
    error: isError ? "Recipes could not be loaded." : null,
    hasSearchQuery: Boolean(debouncedSearchTerm),
  };
};

export default useRecipeSearch;
