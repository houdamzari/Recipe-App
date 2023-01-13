import React from "react";
import RecipeButton from "../RecipeButton/RecipeButton";
import pizza from "../../assets/imgs/pizza.svg";
import drinks from "../../assets/imgs/drinks.svg";
import dessert from "../../assets/imgs/dessert.svg";
import salad from "../../assets/imgs/salad.svg";
function RecipeCategories(props) {
  const drink =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve"><path d="M17.5 17.307a3.662 3.662 0 0 1-2.604-1.078L7.521 8.854A.502.502 0 0 1 7.875 8h19.25a.5.5 0 0 1 .354.854l-7.375 7.375a3.662 3.662 0 0 1-2.604 1.078zM9.082 9l6.521 6.521c1.014 1.012 2.779 1.012 3.793 0L25.918 9H9.082z"/><path d="M17.5 28.5a.5.5 0 0 1-.5-.5V17a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5z"/><path d="M22 29h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1zM23 13H12a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1z"/><path d="M8.854 13.75c-2.952 0-5.354-2.402-5.354-5.354s2.402-5.354 5.354-5.354 5.354 2.401 5.354 5.354a.5.5 0 0 1-1 0 4.36 4.36 0 0 0-4.354-4.354A4.359 4.359 0 0 0 4.5 8.396a4.359 4.359 0 0 0 4.354 4.354c.926 0 1.809-.286 2.554-.827a.5.5 0 0 1 .588.808 5.312 5.312 0 0 1-3.142 1.019z"/></svg>';
  return (
    <>
      <RecipeButton icon={pizza}>Pizza</RecipeButton>
      <RecipeButton icon={dessert}>Dessert</RecipeButton>
      <RecipeButton icon={drinks}>Cocktails</RecipeButton>
      <RecipeButton icon={salad}>Salads</RecipeButton>
    </>
  );
}

export default RecipeCategories;
