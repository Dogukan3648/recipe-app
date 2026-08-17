import { ChefHat, Heart } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-base font-semibold transition-colors sm:px-5 sm:py-3 sm:text-lg focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
        isActive
          ? "bg-orange-50 text-orange-600"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`;

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav
        className="mx-auto flex min-h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-xl text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white sm:h-12 sm:w-12">
            <ChefHat size={28} aria-hidden="true" />
          </span>

          <span className="text-xl font-bold tracking-tight sm:text-3xl">
            Recipe App
          </span>
        </NavLink>

        <div className="flex items-center gap-3">
          <NavLink to="/favorites" className={navLinkClass}>
            <Heart size={22} aria-hidden="true" />
            <span>Favorites</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
