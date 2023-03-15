import React from "react";

import Stars from "./Stars";

import styles from "../styles/CardProduct.module.css";

const CardProduct = ({ details }) => {
  return (
    <div className={`${styles.card} w-full p-4`}>
      <img className={`${styles.image} w-full h-48 object-cover`} src={details.imagen} alt={details.nombre} />
      <h3 className={`${styles.title} text-xl font-bold dark:text-gray-300 mt-4`}>{details.nombre}</h3>
      <p className={`${styles.description} text-sm dark:text-gray-400 mt-2`} data-content={details.descripcion}>
        {details.descripcion}
      </p>
      <Stars value={details.estrellas} />
    </div>
  );
};

export default CardProduct;
