import { useParams } from "react-router";
import FavoriteButton from "../components/recipe/FavoriteButton";
import IngredientList from "../components/recipe/IngredientList";
import useRecipeDetails from "../hooks/useRecipeDetails";

const RecipeDetails = () => {
  const { id } = useParams();

  const { recipe, isLoading, error } = useRecipeDetails(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <main>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <FavoriteButton recipe={recipe} />
      <p>{recipe.category}</p>
      <p>{recipe.area}</p>
      <IngredientList ingredients={recipe.ingredients} />
      <section>
        <h2>Instructions</h2>
        <p>{recipe.instructions}</p>
      </section>
    </main>
  );
};

export default RecipeDetails;
