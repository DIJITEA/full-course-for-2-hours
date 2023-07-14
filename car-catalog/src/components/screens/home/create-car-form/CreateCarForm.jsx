import styles from "./CreateCarForm.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ClearData = {
  name: "",
  price: "",
  image: "",
};

const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState({ ClearData });
  const { register, reset, handleSubmit } = useForm({
    mode: "onChange",
  });

  const createCar = data => {

    setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
    setData(ClearData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input placeholder="Name" {...register('name',{required:true})} />
      <input placeholder="Price" {...register('price',{required:true})} />
      <input placeholder="Image" {...register('image',{required:true})} />
      <button className="btn">Create</button>
    </form>
  );
};

export default CreateCarForm;
