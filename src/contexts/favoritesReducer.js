import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions.js";

export const initialFavoritesState = {
  favorites: [],
};

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      if (state.favorites.some((recipe) => recipe.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (recipe) => recipe.id !== action.payload,
        ),
      };

    default:
      return state;
  }
};
