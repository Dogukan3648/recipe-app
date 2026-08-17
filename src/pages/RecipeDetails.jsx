import { useParams } from "react-router";

import FavoriteButton from "../components/recipe/FavoriteButton";
import IngredientList from "../components/recipe/IngredientList";
import useRecipeDetails from "../hooks/useRecipeDetails";

const RecipeDetails = () => {
  const { id } = useParams();

  const { recipe, isLoading, error } = useRecipeDetails(id);

  if (isLoading) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-lg text-gray-500">Loading...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-lg text-red-500">{error}</p>
      </main>
    );
  }

  if (!recipe) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-lg text-gray-500">Recipe not found.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-orange-50 px-4 py-2 font-semibold text-orange-600">
            {recipe.category}
          </span>

          <span className="rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-600">
            {recipe.area}
          </span>
        </div>

        <div className="flex items-start gap-6">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {recipe.title}
          </h1>

          <FavoriteButton recipe={recipe} />
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-sm">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="aspect-square w-full object-cover"
          />
        </div>

        <IngredientList ingredients={recipe.ingredients} />
      </div>

      <section className="mt-14 border-t border-gray-200 pt-10">
        <h2 className="text-3xl font-bold text-gray-900">Instructions</h2>

        <p className="mt-6 max-w-5xl whitespace-pre-line text-lg font-medium leading-8 text-gray-700 sm:text-xl sm:leading-9">
          {recipe.instructions}
        </p>
      </section>
    </main>
  );
};

export default RecipeDetails;
