import { useEffect, useState } from "react";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import axios from "axios"
function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:3000/cars");
   
      setCars(response.data);
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
