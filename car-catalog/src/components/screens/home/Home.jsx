import { useCallback, useContext, useEffect, useState } from "react";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import { CarService } from "../../../services/car.service";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "./Player";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
function Home() {
  const {data, isLoading} = useQuery(['cars'],() => CarService.getAll())

  const nav = useNavigate();

  const { user, setUser } = useContext(AuthContext);

  if(isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1>Car catalog</h1>
      {user ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (
        <button onClick={() => setUser({ name: "Oleg" })}>Login</button>
      )}
      <VideoPlayer />
      <button onClick={() => nav("/car/1")}>Go</button>
      <CreateCarForm />
      <div>
        {data.length ? (
          data.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
}

export default Home;
