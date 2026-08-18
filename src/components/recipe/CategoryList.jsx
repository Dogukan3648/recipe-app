import { RECIPE_CATEGORIES } from "../../constants/recipeCategories";
import { translations } from "../../constants/translations";
import useLanguage from "../../hooks/useLanguage";

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  const { language } = useLanguage();
  const t = translations[language];
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
        {t.categories.discover}
      </button>

      {RECIPE_CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setSelectedCategory(category)}
          className={buttonClass(selectedCategory === category)}
        >
          {t.categories[category]}
        </button>
      ))}
    </section>
  );
};

export default CategoryList;
