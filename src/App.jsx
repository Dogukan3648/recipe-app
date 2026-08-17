import { Route, Routes } from "react-router";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
