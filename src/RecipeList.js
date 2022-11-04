import React from "react";
import Recipe from "./RecipeView";

function RecipeList( {recipes , deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody className="tableRows">      
          {recipes.map((recipe, index) => (
                <Recipe deleteRecipe={() => deleteRecipe(index)} key="index" recipe={recipe} />
              ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
