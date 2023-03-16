/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useMemo, useRef, useState } from "react";
import MaterialReactTable, {
  MRT_FullScreenToggleButton,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleGlobalFilterButton,
} from "material-react-table";

const ItemsDataTable = (props) => {
  const columns = useMemo(() => props.grid, [props.grid]);
  const rowVirtualizerInstanceRef = useRef(null);

  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setProductsData(props.products);
      setIsLoading(false);
    }
  }, [props.products]);
  useEffect(() => {
    //scroll to the top of the table when the sorting changes
    rowVirtualizerInstanceRef.current?.scrollToIndex(0);
  }, [sorting]);
  // #1f2937
  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={productsData}
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
    </>
  );
};

export default ItemsDataTable;
