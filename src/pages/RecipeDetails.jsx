import { useParams } from "react-router";

import { AlertCircle, LoaderCircle, SearchX } from "lucide-react";
import FavoriteButton from "../components/recipe/FavoriteButton";
import IngredientList from "../components/recipe/IngredientList";
import { translations } from "../constants/translations";
import useLanguage from "../hooks/useLanguage";
import useRecipeDetails from "../hooks/useRecipeDetails";
import useTranslatedRecipe from "../hooks/useTranslatedRecipe";

const RecipeDetails = () => {
  const { id } = useParams();

  const { language } = useLanguage();
  const t = translations[language];

  const { recipe, isLoading, error } = useRecipeDetails(id);

  const translatedRecipe = useTranslatedRecipe(recipe);

  if (isLoading) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-3 text-lg text-gray-600"
          role="status"
        >
          <LoaderCircle
            size={24}
            aria-hidden="true"
            className="animate-spin text-orange-500"
          />
          <p>{t.details.loading}</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-6 py-4 text-red-700"
          role="alert"
        >
          <AlertCircle size={22} aria-hidden="true" />
          <p className="font-medium">{t.details.error}</p>
        </div>
      </main>
    );
  }

  if (!recipe) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-12 text-center">
          <SearchX
            size={40}
            aria-hidden="true"
            className="mx-auto text-gray-300"
          />

          <p className="mt-4 text-xl font-semibold text-gray-800">
            {t.details.notFound}
          </p>

          <p className="mt-2 text-gray-500">{t.details.notFoundText}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-orange-50 px-4 py-2 font-semibold text-orange-600">
            {t.categories[recipe.category] ?? recipe.category}
          </span>

          <span className="rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-600">
            {translatedRecipe.area}
          </span>
        </div>

        <div className="flex items-start gap-6">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {translatedRecipe.title}
          </h1>

          <FavoriteButton recipe={recipe} />
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-sm">
          <img
            src={recipe.image}
            alt={translatedRecipe.title}
            className="aspect-square w-full object-cover"
          />
        </div>

        <IngredientList ingredients={translatedRecipe.ingredients} />
      </div>

      <section className="mt-14 border-t border-gray-200 pt-10">
        <h2 className="text-3xl font-bold text-gray-900">
          {t.details.instructions}
        </h2>

        <p className="mt-6 max-w-5xl whitespace-pre-line text-lg font-medium leading-8 text-gray-700 sm:text-xl sm:leading-9">
          {translatedRecipe.instructions}
        </p>
      </section>
    </main>
  );
};

export default RecipeDetails;
