import React from "react";

import CardProduct from "../components/CardProduct";
import database from "../database/materials.json";

const Products = () => {
  const data = database.materiales;
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-5/6">
        {data.map((item, index) => (
          <CardProduct details={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
