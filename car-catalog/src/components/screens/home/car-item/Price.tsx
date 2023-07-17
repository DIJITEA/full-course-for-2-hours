import React, { FC } from "react";
const Price:FC<any> = ({price}) => {
  return (
    <p>
      {new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "USD",
      }).format(+price)}
    </p>
  );
};
export default React.memo(Price);
