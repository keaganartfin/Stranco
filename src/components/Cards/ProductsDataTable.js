/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState, useMemo, useRef } from "react";
import MaterialReactTable, {
  MRT_FullScreenToggleButton,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleGlobalFilterButton,
} from "material-react-table";
import { Paper, TableContainer } from "@mui/material";
import { styled } from "@mui/system";
import "tailwindcss/tailwind.css";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: 600,
  "& .MuiTableCell-root": {
    borderBottom: `1px dashed ${theme.palette.grey[300]}`,
  },
  "& .MuiTableRow-root:nth-of-type(odd)": {
    backgroundColor: theme.palette.grey[100],
  },
}));

const ItemsDataTable = ({ grid, products }) => {
  const columns = useMemo(() => grid, [grid]);
  const rowVirtualizerInstanceRef = useRef(null);

  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    setProductsData(products);
    setIsLoading(false);
  }, [products]);

  useEffect(() => {
    //scroll to the top of the table when the sorting changes
    rowVirtualizerInstanceRef.current?.scrollToIndex(0);
  }, [sorting]);

  const tableProps = {
    columns,
    data: productsData,
    enableBottomToolbar: true,
    enableColumnResizing: true,
    enableColumnVirtualization: true,
    enableGlobalFilterModes: true,
    enablePinning: true,
    enableRowNumbers: true,
    enableRowVirtualization: true,
    enableStickyHeader: true,
    enableHiding: false,
    muiTableContainerProps: { sx: { maxHeight: "600px" } },
    initialState: {
      density: "compact",
      pagination: { pageSize: 30 },
      columnVisibility: { id: false },
    },
    muiTableContainerComponent: StyledTableContainer,
    muiTablePaperComponent: (props) => (
      <Paper
        elevation={0}
        className="rounded-none border border-dashed border-gray-300"
        {...props}
      />
    ),
    onSortingChange: setSorting,
    state: { isLoading, sorting },
    rowVirtualizerInstanceRef, //optional
    rowVirtualizerProps: { overscan: 5 }, //optionally customize the row virtualizer
    columnVirtualizerProps: { overscan: 2 }, //optionally customize the column virtualizer
    renderToolbarInternalActions: ({ table }) => (
      <>
        <MRT_ToggleGlobalFilterButton table={table} />
        <MRT_ToggleDensePaddingButton table={table} />
        <MRT_ToggleFiltersButton table={table} />
        <MRT_FullScreenToggleButton table={table} />
      </>
    ),
  };

  return <MaterialReactTable {...tableProps} />;
};

export default ItemsDataTable;
