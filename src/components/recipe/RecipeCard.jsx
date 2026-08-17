import { Link } from "react-router";
import FavoriteButton from "./FavoriteButton";

const RecipeCard = ({ recipe }) => {
  return (
    <article>
      <img src={recipe.image} alt={recipe.title} />

      <h2>{recipe.title}</h2>

      <p>{recipe.category}</p>

      <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
      <FavoriteButton recipe={recipe} />
    </article>
  );
};

export default RecipeCard;
