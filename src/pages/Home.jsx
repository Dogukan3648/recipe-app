import { AlertCircle, LoaderCircle, SearchX } from "lucide-react";
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
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Discover Recipes
      </h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {isLoading && (
        <div className="mt-10 flex items-center gap-3 text-lg text-gray-600">
          <LoaderCircle
            size={24}
            aria-hidden="true"
            className="animate-spin text-orange-500"
          />
          <p>Loading recipes...</p>
        </div>
      )}
      {error && (
        <div
          className="mt-10 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-6 py-4 text-red-700"
          role="alert"
        >
          <AlertCircle size={22} aria-hidden="true" />
          <p className="font-medium">{error}</p>
        </div>
      )}

      {!isLoading && !error && recipes.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-gray-300 px-6 py-12 text-center">
          <SearchX
            size={40}
            aria-hidden="true"
            className="mx-auto text-gray-300"
          />
          <p className="mt-4 text-xl font-semibold text-gray-800">
            No recipes found.
          </p>
          <p className="mt-2 text-gray-500">
            Try searching with a different recipe name.
          </p>
        </div>
      )}
      {!isLoading && !error && recipes.length > 0 && (
        <RecipeGrid recipes={recipes} />
      )}
    </main>
  );
};

export default Home;
