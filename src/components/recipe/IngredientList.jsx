const IngredientList = ({ ingredients }) => {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
      <h2 className="text-3xl font-bold text-gray-900">Ingredients</h2>

      <ul className="mt-6">
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.name}
            className="flex items-center justify-between gap-6 border-b border-gray-100 py-4 last:border-b-0"
          >
            <span className="font-semibold text-gray-900">
              {ingredient.name}
            </span>

            <span className="text-right text-gray-500">
              {ingredient.measure}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
