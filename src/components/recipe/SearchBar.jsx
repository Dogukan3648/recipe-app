import { Search } from "lucide-react";
import { translations } from "../../constants/translations";
import useLanguage from "../../hooks/useLanguage";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative mt-8 max-w-2xl">
      <Search
        size={20}
        aria-hidden="true"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />
      <label htmlFor="recipe-search" className="sr-only">
        {t.home.searchLabel}
      </label>
      <input
        id="recipe-search"
        type="search"
        placeholder={t.home.searchPlaceholder}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white py-3.5 pl-12 pr-4 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      />
    </div>
  );
};

export default SearchBar;
