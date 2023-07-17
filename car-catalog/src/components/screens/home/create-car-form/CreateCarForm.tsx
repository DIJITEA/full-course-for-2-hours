import styles from "./CreateCarForm.module.css";

import { useForm } from "react-hook-form";

import { ICarData } from "../../../../types/car.interface";
import { useCreateCar } from "./useCreateCar";

const CreateCarForm = () => {
  const { register, reset, handleSubmit } = useForm<ICarData>({
    mode: "onChange",
  });

  const { createCar }:any = useCreateCar(reset);

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
