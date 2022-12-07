function MyRecipesComponent({label, image, cuisineType, mealType, calories, ingredients}) {
  return(
    <div>
      <div className="container">
        <h2>{label}</h2>
      </div>

      <div className="container">
        <img className="tasty" src={image} alt="dish" />
      </div>

      <div className="container">
        <p className="type">{cuisineType}</p>
      </div>
      <div className="container">
        <p className="type">{mealType}</p>
      </div>
      <div className="container">
        <p className="type">{calories.toFixed()} calories</p>
      </div>

      <ul className="list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}
export default MyRecipesComponent;