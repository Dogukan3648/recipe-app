import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes }) => {
  return (
    <section>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
};

export default RecipeGrid;
