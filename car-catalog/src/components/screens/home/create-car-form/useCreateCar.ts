import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CarService } from "../../../../services/car.service";
import { ICarData } from "../../../../types/car.interface";
import { SubmitHandler, UseFormReset } from "react-hook-form";

export const useCreateCar = (reset:UseFormReset<ICarData>) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ["create car"],
    (data: ICarData) => CarService.create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cars"]);
        reset();
      },
    }
  );

  const createCar:SubmitHandler<ICarData> = (data) => {
    mutate(data);
    // setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
    // setData(ClearData);
  };
  return createCar;
};
