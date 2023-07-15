import { useCallback, useContext, useEffect, useState } from "react";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import { CarService } from "../../../services/car.service";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "./Player";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Header from "../../ui/Header";
import Catalog from "../../ui/Catalog";
function Home() {
  const { data, isLoading } = useQuery(["cars"], () => CarService.getAll());

  const nav = useNavigate();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Car catalog</h1>
      <Header />
      <VideoPlayer />
      <button onClick={() => nav("/car/1")}>Go</button>
      <CreateCarForm />
      <Catalog data={data} />
    </div>
  );
}

export default Home;
