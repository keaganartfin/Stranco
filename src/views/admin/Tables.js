import React from "react";
import CardTable from "components/Cards/CardTable.js";

export default function Tables() {
  return (
    <>
      <div className="flex justify-center flex-wrap ">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}
