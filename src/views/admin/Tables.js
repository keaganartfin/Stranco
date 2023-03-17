import React from "react";
import ProductsDataTable from "components/Cards/ProductsDataTable";

export default function Tables({ grid, products }) {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full h-full px-0 -mt-12 mb-12 xl:mb-0 sm:px-4">
        <ProductsDataTable grid={grid} products={products} />
      </div>
    </div>
  );
}

