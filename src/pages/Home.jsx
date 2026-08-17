import { useState } from "react";

import CategoryList from "../components/recipe/CategoryList";
import RecipeGrid from "../components/recipe/RecipeGrid";
import SearchBar from "../components/recipe/SearchBar";
import useDiscoverRecipes from "../hooks/useDiscoverRecipes";
import useRecipeSearch from "../hooks/useRecipeSearch";
import useRecipesByCategory from "../hooks/useRecipesByCategory";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    recipes: searchResults,
    searchTerm,
    setSearchTerm,
    isLoading: isSearchLoading,
    error: searchError,
    hasSearchQuery,
  } = useRecipeSearch();

  const {
    recipes: discoverRecipes,
    isLoading: isDiscoverLoading,
    error: discoverError,
  } = useDiscoverRecipes();

  const {
    recipes: categoryRecipes,
    isLoading: isCategoryLoading,
    error: categoryError,
  } = useRecipesByCategory(selectedCategory);

  const recipes = hasSearchQuery
    ? searchResults
    : selectedCategory
      ? categoryRecipes
      : discoverRecipes;

  const isLoading = hasSearchQuery
    ? isSearchLoading
    : selectedCategory
      ? isCategoryLoading
      : isDiscoverLoading;

  const error = hasSearchQuery
    ? searchError
    : selectedCategory
      ? categoryError
      : discoverError;

  return (
    <main>
      <h1>Discover Recipes</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && recipes.length === 0 && <p>No recipes found.</p>}
      {!isLoading && !error && recipes.length > 0 && (
        <RecipeGrid recipes={recipes} />
      )}
    </main>
  );
};

export default Home;
