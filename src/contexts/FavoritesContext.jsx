import { createContext, useEffect, useReducer } from "react";

import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

import { favoritesReducer, initialFavoritesState } from "./favoritesReducer";

export const FavoritesContext = createContext(null);

const getInitialState = () => {
  try {
    const storedFavorites = localStorage.getItem("recipe-favorites");

    return {
      favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
    };
  } catch {
    return {
      favorites: [],
    };
  }
};

const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    favoritesReducer,
    initialFavoritesState,
    getInitialState,
  );

  useEffect(() => {
    localStorage.setItem("recipe-favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  const addFavorite = (recipe) => {
    const favoriteRecipe = {
      id: recipe.id,
      title: recipe.title,
      category: recipe.category,
      image: recipe.image,
    };

    dispatch({ type: ADD_FAVORITE, payload: favoriteRecipe });
  };

  const removeFavorite = (id) => {
    dispatch({ type: REMOVE_FAVORITE, payload: id });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
