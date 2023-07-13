import { useEffect, useMemo, useState } from "react";
import { cars as carsData } from "./car.data.js";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
function Home() {
  const [cars, setCars] = useState(carsData)
  useEffect(()=>{console.log('hey')},[cars])
  // const filltereadCars = useMemo(
  //   () => cars.filter((car) => car.price > 20000),
  //   []
  // );
 

  return (
    <div>
      <h1>Car catalog</h1>
      <CreateCarForm setCars={setCars}/>
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
