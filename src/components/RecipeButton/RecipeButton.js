import React from "react";
import "./RecipeButton.css";
function RecipeButton({ children, icon }) {
  return (
    <button className="recipe__button">
      <img src={icon} alt="" className="recipe__button-icon" />
      {children}
    </button>
  );
}

export default RecipeButton;
