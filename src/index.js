import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Recipes from './pages/Recipes';
import MealPlanner from './pages/Meal-planner';
import ShoppingList from './pages/Shopping-list';
import Contact from './pages/Contact';
import CreateAccount from './pages/Create-account';
import ViewRecipe from './pages/View-recipe';


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="meal-planner" element={<MealPlanner />} />
          <Route path="shopping-list" element={<ShoppingList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="view-recipe/:id" element={<ViewRecipe />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
