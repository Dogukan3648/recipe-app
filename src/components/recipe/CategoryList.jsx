import { RECIPE_CATEGORIES } from "../../constants/recipeCategories";

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  const buttonClass = (isActive) =>
    `rounded-full px-6 py-4 text-xl font-medium transition-colors sm:text-2xl
     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
       isActive
         ? "bg-orange-500 text-white"
         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
     }`;
  return (
    <section className="mt-6 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => setSelectedCategory(null)}
        className={buttonClass(selectedCategory === null)}
      >
        Discover
      </button>

      {RECIPE_CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setSelectedCategory(category)}
          className={buttonClass(selectedCategory === category)}
        >
          {category}
        </button>
      ))}
    </section>
  );
};

export default CategoryList;
