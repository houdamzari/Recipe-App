import React from "react";
import RecipeCategories from "../../components/RecipeCategories/RecipeCategories";
import SearchBar from "../../components/SearchBar/SearchBar";
function RecipeSection(props) {
  return (
    <div>
      <SearchBar />
      <RecipeCategories />
    </div>
  );
}

export default RecipeSection;
