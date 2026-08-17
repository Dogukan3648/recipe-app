import { Heart } from "lucide-react";
import useFavorites from "../../hooks/useFavorites";

const FavoriteButton = ({ recipe }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((favorite) => favorite.id === recipe.id);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <button
      type="button"
      onClick={handleFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFavorite}
      className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
        isFavorite
          ? "bg-red-50 text-red-500"
          : "bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500"
      }`}
    >
      <Heart
        size={22}
        aria-hidden="true"
        fill={isFavorite ? "currentColor" : "none"}
      />
    </button>
  );
};

export default FavoriteButton;
