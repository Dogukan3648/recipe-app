import axios from "axios";

import { RECIPE_CATEGORIES } from "../constants/recipeCategories";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchRecipes = async (searchTerm) => {
  const response = await axios.get(`${BASE_URL}/search.php`, {
    params: {
      s: searchTerm,
    },
  });

  const meals = response.data.meals || [];

  return meals.map((meal) => ({
    id: meal.idMeal,
    title: meal.strMeal,
    category: meal.strCategory,
    image: meal.strMealThumb,
  }));
};

export const getRecipeById = async (id) => {
  const response = await axios.get(`${BASE_URL}/lookup.php`, {
    params: {
      i: id,
    },
  });

  const meal = response.data.meals?.[0];

  if (!meal) {
    return null;
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        name: ingredient,
        measure: measure?.trim() || "",
      });
    }
  }

  return {
    id: meal.idMeal,
    title: meal.strMeal,
    category: meal.strCategory,
    area: meal.strArea,
    image: meal.strMealThumb,
    instructions: meal.strInstructions,
    ingredients,
  };
};

export const getRecipesByCategory = async (category) => {
  const response = await axios.get(`${BASE_URL}/filter.php`, {
    params: {
      c: category,
    },
  });
  const meals = response.data.meals || [];

  return meals.map((meal) => ({
    id: meal.idMeal,
    title: meal.strMeal,
    image: meal.strMealThumb,
    category,
  }));
};

export const getDiscoverRecipes = async () => {
  const results = await Promise.all(
    RECIPE_CATEGORIES.map((category) => getRecipesByCategory(category)),
  );
  return Array.from({ length: 3 }, (_, index) =>
    results.map((result) => result[index]),
  )
    .flat()
    .filter(Boolean);
};
