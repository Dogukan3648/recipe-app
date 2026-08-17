import { ChefHat } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-gray-900 
              rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                <ChefHat size={22} aria-hidden="true" />
              </span>

              <span className="text-xl font-bold">Recipe App</span>
            </Link>

            <p className="mt-4 max-w-sm text-base leading-7 text-gray-600">
              Discover delicious recipes and save your favorites for later.
            </p>
          </div>

          <nav
            className="flex items-center gap-6"
            aria-label="Footer navigation"
          >
            <Link
              to="/"
              className="text-base font-medium text-gray-700 transition-colors hover:text-orange-600 sm:text-lg focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-md"
            >
              Home
            </Link>

            <Link
              to="/favorites"
              className="text-base font-medium text-gray-700 transition-colors hover:text-orange-600 sm:text-lg
              focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-md focus-visible:outline-none"
            >
              Favorites
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-gray-200 pt-6 text-base text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Powered by TheMealDB</p>

          <p>© 2026 Recipe App</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
