import "../styles/card.css";

function Card({ recipeType }) {
  return (
    <div className="homeCard">
      <h2 className="recipeType">{recipeType}</h2>
    </div>
  );
}

export default Card;
