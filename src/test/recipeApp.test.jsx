import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import FavoriteButton from "../components/recipe/FavoriteButton";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../contexts/actions";
import { favoritesReducer } from "../contexts/favoritesReducer";
import useFavorites from "../hooks/useFavorites";

vi.mock("../hooks/useFavorites", () => ({
  default: vi.fn(),
}));

vi.mock("../hooks/useLanguage", () => ({
  default: () => ({
    language: "en",
  }),
}));

const recipe = {
  id: "1",
  title: "Test Recipe",
  category: "Beef",
  image: "test.jpg",
};

describe("Recipe App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("adds a recipe to favorites", () => {
    const state = { favorites: [] };

    const result = favoritesReducer(state, {
      type: ADD_FAVORITE,
      payload: recipe,
    });

    expect(result.favorites).toEqual([recipe]);
  });

  it("does not add the same recipe twice", () => {
    const state = { favorites: [recipe] };

    const result = favoritesReducer(state, {
      type: ADD_FAVORITE,
      payload: recipe,
    });

    expect(result.favorites).toHaveLength(1);
  });

  it("removes a recipe from favorites", () => {
    const state = { favorites: [recipe] };

    const result = favoritesReducer(state, {
      type: REMOVE_FAVORITE,
      payload: recipe.id,
    });

    expect(result.favorites).toEqual([]);
  });

  it("adds a recipe when favorite button is clicked", () => {
    const addFavorite = vi.fn();

    useFavorites.mockReturnValue({
      favorites: [],
      addFavorite,
      removeFavorite: vi.fn(),
    });

    render(<FavoriteButton recipe={recipe} />);

    fireEvent.click(screen.getByRole("button", { name: "Add to favorites" }));

    expect(addFavorite).toHaveBeenCalledWith(recipe);
  });

  it("removes a recipe when favorite button is clicked", () => {
    const removeFavorite = vi.fn();

    useFavorites.mockReturnValue({
      favorites: [recipe],
      addFavorite: vi.fn(),
      removeFavorite,
    });

    render(<FavoriteButton recipe={recipe} />);

    fireEvent.click(
      screen.getByRole("button", { name: "Remove from favorites" }),
    );

    expect(removeFavorite).toHaveBeenCalledWith(recipe.id);
  });
});
