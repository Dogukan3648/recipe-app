import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes }) => {
  return (
    <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
};

export default RecipeGrid;
