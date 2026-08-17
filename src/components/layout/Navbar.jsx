import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav aria-label="Main-navigation">
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};

export default Navbar;
