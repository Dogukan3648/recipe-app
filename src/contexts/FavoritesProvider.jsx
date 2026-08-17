import { useEffect, useReducer } from "react";
import { FavoritesContext } from "./FavoritesContext";

import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

import { favoritesReducer, initialFavoritesState } from "./favoritesReducer";

const FAVORITES_STORAGE_KEY = "recipe-favorites";

const getInitialState = () => {
  try {
    const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!storedFavorites) {
      return initialFavoritesState;
    }
    const parsedFavorites = JSON.parse(storedFavorites);

    return {
      favorites: Array.isArray(parsedFavorites) ? parsedFavorites : [],
    };
  } catch {
    return initialFavoritesState;
  }
};

const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    favoritesReducer,
    initialFavoritesState,
    getInitialState,
  );

  useEffect(() => {
    localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(state.favorites),
    );
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
