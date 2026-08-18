# Recipe App

A responsive recipe discovery application built with React and Vite.

Recipe App allows users to explore recipes, search by recipe name, browse categories, save favorites, view detailed cooking instructions, and switch between English and Turkish. Dynamic recipe content is translated through Google Cloud Translation.

## Live Demo

[View the live application](https://recipe-app-amber-six.vercel.app)

## Features

- Discover recipes from multiple categories
- Search recipes by name
- Browse category-based recipe results
- Paginated search and category results
- View detailed recipe information
  - Ingredients
  - Measurements
  - Cooking instructions
  - Cuisine / origin
- Save and remove favorite recipes
- Favorites persisted with `localStorage`
- English and Turkish language support
- Dynamic recipe translation with Google Cloud Translation
- Turkish search queries translated before querying TheMealDB
- Responsive layout for desktop, tablet, and mobile
- Accessible navigation, buttons, focus states, and semantic markup
- Loading, empty, error, and not-found states
- Client-side routing with direct route support
- Deployed with Vercel

## Screenshots

### Home

![Recipe App Home](./screenshots/home.png)

### Favorites

![Recipe App Favorites](./screenshots/favorites-tr.png)

### Turkish Recipe Details

![Recipe App Turkish Recipe Details](./screenshots/recipe-detail-tr.png)

### Turkish Cooking Instructions

![Recipe App Turkish Cooking Instructions](./screenshots/recipe-instructions-tr.png)

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Lucide React

### State & Data

- TanStack Query
- React Context
- `useReducer`
- `localStorage`
- Axios

### APIs

- TheMealDB
- Google Cloud Translation API

### Testing & Tooling

- Vitest
- React Testing Library
- ESLint

### Deployment

- Vercel
- Vercel Serverless Functions

## Architecture

The application separates server state, client state, API communication, and presentation responsibilities.

- **TanStack Query** manages remote/server state such as recipes and translations.
- **Context + useReducer** manages favorite recipes.
- **Custom hooks** encapsulate recipe queries, search logic, language state, and translations.
- **API modules** handle communication with TheMealDB and the translation endpoint.
- **Vercel Serverless Functions** keep the Google Translation API key outside the client bundle.
- **Presentational components** handle reusable UI such as recipe cards, grids, pagination, and favorite controls.

## Project Structure

```text
recipe-app/
├── api/
│   └── translate.js
├── public/
├── screenshots/
│   ├── favorites-tr.png
│   ├── home.png
│   ├── recipe-detail-tr.png
│   └── recipe-instructions-tr.png
├── src/
│   ├── api/
│   ├── components/
│   ├── constants/
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   └── test/
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```
