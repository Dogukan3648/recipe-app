const IngredientList = ({ ingredients }) => {
  return (
    <section>
      <h2>Ingredients</h2>

      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.measure} {ingredient.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
