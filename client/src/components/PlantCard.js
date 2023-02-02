import { useState } from "react";

function PlantCard({ plant, editPlant }) {
  const { id, name, image, price, is_in_stock } = plant;

  // const [isInStock, setIsInStock] = useState();

  function handleToggleStock() {
    // setIsInStock((isInStock) => !isInStock);
    fetch(`/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_in_stock: !is_in_stock
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      editPlant(data)
      // setIsInStock((isInStock) => !isInStock);
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {is_in_stock ? (
        <button className="primary" onClick={handleToggleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
