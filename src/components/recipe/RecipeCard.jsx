import { Link } from "react-router";
import FavoriteButton from "./FavoriteButton";

const RecipeCard = ({ recipe }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link
        to={`/recipes/${recipe.id}`}
        className="overflow-hidden rounded-t-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-inset"
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-500">
          {recipe.category}
        </p>

        <h2 className="mb-5 text-xl font-bold leading-snug text-gray-900">
          <Link
            to={`/recipes/${recipe.id}`}
            className="transition-colors hover:text-orange-600"
          >
            {recipe.title}
          </Link>
        </h2>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <Link
            to={`/recipes/${recipe.id}`}
            className="font-semibold text-orange-600 transition-colors hover:text-orange-700
            rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            View Recipe
          </Link>

          <FavoriteButton recipe={recipe} />
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
