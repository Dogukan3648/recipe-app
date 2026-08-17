import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mt-8 max-w-2xl">
      <Search
        size={20}
        aria-hidden="true"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />
      <input
        type="search"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white py-3.5 pl-12 pr-4 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      />
    </div>
  );
};

export default SearchBar;
