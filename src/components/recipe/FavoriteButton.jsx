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
    >
      <Heart aria-hidden="true" fill={isFavorite ? "currentColor" : "none"} />
    </button>
  );
};

export default FavoriteButton;
