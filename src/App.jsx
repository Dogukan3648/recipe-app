import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </>
  );
};

export default App;
