import React from "react";
import DataTable from "components/Cards/DataTable";


export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full h-full px-0 mb-12 xl:mb-0 sm:px-4">
          <DataTable />
        </div>
      </div>
    </>
  );
}
