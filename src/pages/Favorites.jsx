import RecipeGrid from "../components/recipe/RecipeGrid";
import useFavorites from "../hooks/useFavorites";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <main>
      <h1>Favorites</h1>

      {favorites.length === 0 && <p>No favorite recipes yet</p>}
      {favorites.length > 0 && <RecipeGrid recipes={favorites} />}
    </main>
  );
};

export default Favorites;
