import { AlertCircle, LoaderCircle, SearchX } from "lucide-react";
import { useState } from "react";

import CategoryList from "../components/recipe/CategoryList";
import Pagination from "../components/recipe/Pagination";
import RecipeGrid from "../components/recipe/RecipeGrid";
import SearchBar from "../components/recipe/SearchBar";
import { translations } from "../constants/translations";
import useDiscoverRecipes from "../hooks/useDiscoverRecipes";
import useLanguage from "../hooks/useLanguage";
import useRecipeSearch from "../hooks/useRecipeSearch";
import useRecipesByCategory from "../hooks/useRecipesByCategory";
import useTranslatedRecipes from "../hooks/useTranslatedRecipes";

const RECIPES_PER_PAGE = 9;

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);

    if (value.trim()) {
      setSelectedCategory(null);
    }

    setCurrentPage(1);
  };

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

  const shouldPaginate = hasSearchQuery || Boolean(selectedCategory);

  const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;

  const totalPages = Math.ceil(recipes.length / RECIPES_PER_PAGE);

  const paginatedRecipes = shouldPaginate
    ? recipes.slice(startIndex, startIndex + RECIPES_PER_PAGE)
    : recipes;

  const translatedRecipes = useTranslatedRecipes(paginatedRecipes);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {t.home.title}
      </h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
      />
      {isLoading && (
        <div className="mt-10 flex items-center gap-3 text-lg text-gray-600">
          <LoaderCircle
            size={24}
            aria-hidden="true"
            className="animate-spin text-orange-500"
          />
          <p>{t.home.loading}</p>
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
            {t.home.noResults}
          </p>
          <p className="mt-2 text-gray-500">{t.home.noResultsHint}</p>
        </div>
      )}
      {!isLoading && !error && recipes.length > 0 && (
        <>
          <RecipeGrid recipes={translatedRecipes} />

          {shouldPaginate && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </main>
  );
};

export default Home;
