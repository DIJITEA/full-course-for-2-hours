import { useEffect, useState } from "react";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/cars");
      const data = await response.json();
      setCars(data);
    };
    fetchData()
  }, []);

  return (
    <div>
      <h1>Car catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
}

export default Home;
