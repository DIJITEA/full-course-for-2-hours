import { useCallback, useEffect, useState } from "react";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import { CarService } from "../../../services/car.service";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "./Player";
function Home() {
  const [cars, setCars] = useState([]);

  const clearCars = useCallback(() => () => {
    setCars([]);
  },[]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll();

      setCars(data);
    };
    fetchData();
  }, []);

  const nav = useNavigate();

  return (
    <div>
      <h1>Car catalog</h1>
      <VideoPlayer />
      <button onClick={() => nav("/car/1")}>Go</button>
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
