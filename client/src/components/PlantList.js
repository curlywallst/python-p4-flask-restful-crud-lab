import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {
  const editPlant = (updatedPlant) => {
    const editedPlants = plants.map(plant => plant.id === updatedPlant.id ? updatedPlant : plant)
    setPlants(editedPlants)
  }

  return (
    <ul className="cards">
      {plants.map((plant) => {
        return <PlantCard key={plant.id} plant={plant} editPlant={editPlant} />;
      })}
    </ul>
  );
}

export default PlantList;
