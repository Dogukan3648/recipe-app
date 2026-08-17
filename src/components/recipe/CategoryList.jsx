const categories = ["Beef", "Chicken", "Seafood", "Vegetarian"];

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section>
      <button type="button" onClick={() => setSelectedCategory(null)}>
        Discover
      </button>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </section>
  );
};

export default CategoryList;
