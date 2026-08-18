import { Heart } from "lucide-react";
import RecipeGrid from "../components/recipe/RecipeGrid";
import { translations } from "../constants/translations";
import useFavorites from "../hooks/useFavorites";
import useLanguage from "../hooks/useLanguage";
import useTranslatedRecipes from "../hooks/useTranslatedRecipes";

const Favorites = () => {
  const { favorites } = useFavorites();
  const { language } = useLanguage();
  const t = translations[language];
  const translatedFavorites = useTranslatedRecipes(favorites);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {t.favorites.title}
      </h1>

      {favorites.length === 0 && (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 py-16 text-center">
          <Heart size={40} aria-hidden="true" className="mb-4 text-gray-300" />

          <p className="text-lg font-semibold text-gray-700">
            {t.favorites.emptyTitle}
          </p>

          <p className="mt-1 text-gray-500">{t.favorites.emptyText}</p>
        </div>
      )}

      {favorites.length > 0 && <RecipeGrid recipes={translatedFavorites} />}
    </main>
  );
};

export default Favorites;
