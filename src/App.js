import './App.css';
import { useEffect, useState } from 'react';
import image from './food.jpg';
import icon from './recipe.png';
import MyRecipesComponent from './MyRecipesComponent';
import React from 'react';

function App() {

  const MY_ID = process.env.REACT_APP_MY_ID;
  const MY_KEY = process.env.REACT_APP_MY_KEY;

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('meat');

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );
      const data = await response.json();
      setMyRecipes(data.hits);
    };
    getRecipe();
  }, [wordSubmitted, MY_ID, MY_KEY]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }
  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }
  return (

    <div className="main">
      <div className="container">
        <img className='background' src={image} alt="bg" />
      </div>

      <div className="container">
        <h1>Find a Recipe</h1>
      </div> 

      <div className="container">
        <form onSubmit={finalSearch}>
          <input onChange={myRecipeSearch} value={mySearch} className='search' type="text" placeholder='Search...'>
          </input>

          <div className="container">
            <button><img className='icon' src={icon} alt="icon" /></button>
          </div>
        </form>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipesComponent
        key={index}
        label = {element.recipe.label}
        image = {element.recipe.image}
        cuisineType = {element.recipe.cuisineType}
        mealType = {element.recipe.mealType}
        calories = {element.recipe.calories}
        ingredients = {element.recipe.ingredientLines}
        />
      ))}

      <p>all pics was taken from freepik.com</p>
    </div>
  );
}

export default App;
