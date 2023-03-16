/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useMemo, useRef, useState } from "react";
import MaterialReactTable, {
  MRT_FullScreenToggleButton,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleGlobalFilterButton,
} from "material-react-table";
import { productGrid } from "data/dummy";
import inventoryData from "data/stranco-inventory.json";

const DataTable = () => {
  const columns = useMemo(() => productGrid, []);
  const rowVirtualizerInstanceRef = useRef(null);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setData(inventoryData);
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    //scroll to the top of the table when the sorting changes
    rowVirtualizerInstanceRef.current?.scrollToIndex(0);
  }, [sorting]);
// #1f2937
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableBottomToolbar
      enableColumnResizing
      enableColumnVirtualization
      enableGlobalFilterModes
      enablePinning
      enableRowNumbers
      enableRowVirtualization
      enableStickyHeader
      enableHiding={false}
      initialState={{ density: "compact", pagination: { pageSize: 30 } }}
      muiTableContainerProps={{ sx: { maxHeight: "600px" } }}
      muiTablePaperProps={{
        elevation: 0,
        sx: {
          borderRadius: "0",
          border: "1px dashed #e0e0e0",
        },
      }}
      muiTableBodyProps={{
        sx: {
          "& tr:nth-of-type(odd)": {
            backgroundColor: "#f5f5f5",
          },
        },
      }}
      onSortingChange={setSorting}
      state={{ isLoading, sorting }}
      rowVirtualizerInstanceRef={rowVirtualizerInstanceRef} //optional
      rowVirtualizerProps={{ overscan: 5 }} //optionally customize the row virtualizer
      columnVirtualizerProps={{ overscan: 2 }} //optionally customize the column virtualizer
      renderToolbarInternalActions={({ table }) => (
        <>
          <MRT_ToggleGlobalFilterButton table={table} />
          <MRT_ToggleDensePaddingButton table={table} />
          <MRT_ToggleFiltersButton table={table} />
          <MRT_FullScreenToggleButton table={table} />
        </>
      )}
    />
  );
};

export default DataTable;
