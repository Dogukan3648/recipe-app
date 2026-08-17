const categories = ["Beef", "Chicken", "Seafood", "Vegetarian"];

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  const buttonClass = (isActive) =>
    `rounded-full px-6 py-4 text-xl font-medium transition-colors sm:text-2xl ${
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

      {categories.map((category) => (
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
