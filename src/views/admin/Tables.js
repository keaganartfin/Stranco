import React from "react";
import ProductsDataTable from "components/Cards/ProductsDataTable";

export default function Tables(props) {
  return (
    <>
      <div className="flex flex-wrap justify-center ">
      <div className="w-full h-full px-0 -mt-12 mb-12 xl:mb-0 sm:px-4">
          <ProductsDataTable grid={props.grid} products={props.products} />
        </div>
      </div>
    </>
  );
}
