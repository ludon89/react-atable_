import React, { useState, useEffect } from "react";

import "../styles/recipe.css";
import "../styles/searchbar.css";

import Data from "./data/recettes.json";

export function RecipeData() {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredData = Data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const noResults = () => {
    if (searchInput.length > 1 && filteredData.length === 0) {
      return (
        <div>
          <p>Pas de résultats</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="searchBarContainer">
        <form>
          <input
            type="text"
            placeholder="Recherche..."
            name="search"
            className="searchBar"
            onChange={handleInputChange}
          />
        </form>
      </div>

      <div class="recipeContainer">
        {noResults()}

        {searchInput.length > 1
          ? filteredData.map((item) => {
              return (
                <div className="recipeCard" key={item.id}>
                  <h2 className="recipeName">{item.name}</h2>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/" +
                      item.name +
                      ".jpg"
                    }
                    alt="recette"
                    className="recipeImage"
                  />
                  <p>Pour {item.servings} personnes</p>
                  <br />

                  <h3>Ingrédients</h3>
                  {item.ingredients.map((subitem) => {
                    return (
                      <ul key={subitem.ingredient}>
                        <li>
                          {subitem.ingredient} : {subitem.quantity}{" "}
                          {subitem.unit}
                        </li>
                      </ul>
                    );
                  })}
                  <br />

                  <h3>Instructions</h3>
                  <p>{item.description}</p>
                  <br />

                  <h3>Appareil requis</h3>
                  <ul>
                    <li>{item.appliance}</li>
                  </ul>
                  <br />

                  <h3>Ustensiles requis</h3>
                  {item.ustensils.map((ustensils) => (
                    <ul key={ustensils}>
                      <li>{ustensils}</li>
                    </ul>
                  ))}
                </div>
              );
            })
          : // si 0 ou 1 caractère dans le champ de recherche, on affiche toutes les données
            Data.map((item) => {
              return (
                <div className="recipeCard" key={item.id}>
                  <h2 className="recipeName">{item.name}</h2>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/" +
                      item.name +
                      ".jpg"
                    }
                    alt="recette"
                    className="recipeImage"
                  />
                  <p>Pour {item.servings} personnes</p>
                  <br />

                  <h3>Ingrédients</h3>
                  {item.ingredients.map((subitem) => {
                    return (
                      <ul key={subitem.ingredient}>
                        <li>
                          {subitem.ingredient} : {subitem.quantity}{" "}
                          {subitem.unit}
                        </li>
                      </ul>
                    );
                  })}
                  <br />

                  <h3>Instructions</h3>
                  <p>{item.description}</p>
                  <br />

                  <h3>Appareil requis</h3>
                  <ul>
                    <li>{item.appliance}</li>
                  </ul>
                  <br />

                  <h3>Ustensiles requis</h3>
                  {item.ustensils.map((ustensils) => (
                    <ul key={ustensils}>
                      <li>{ustensils}</li>
                    </ul>
                  ))}
                </div>
              );
            })}
      </div>
    </>
  );
}
