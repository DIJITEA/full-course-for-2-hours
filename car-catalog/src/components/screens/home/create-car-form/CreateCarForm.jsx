import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./CreateCarForm.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CarService } from "../../../../services/car.service";

const ClearData = {
  name: "",
  price: "",
  image: "",
};

const CreateCarForm = () => {
  // const [data, setData] = useState({ ClearData });
  const { register, reset, handleSubmit } = useForm({
    mode: "onChange",
  });
const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ["create car"],
    (data) => CarService.create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cars')
        reset();
      },
    }
  );

  const createCar = (data) => {
    mutate(data);
    // setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
    // setData(ClearData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input placeholder="Name" {...register("name", { required: true })} />
      <input placeholder="Price" {...register("price", { required: true })} />
      <input placeholder="Image" {...register("image", { required: true })} />
      <button className="btn">Create</button>
    </form>
  );
};

export default CreateCarForm;
