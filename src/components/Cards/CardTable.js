import React, { useEffect, useState } from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Selection,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { allProductData, productGrid } from "data/dummy";
import { updateSampleSection } from "utils/sample-base";

const CardTable = () => {
  const selectionSettings = { persistentSelection: true };
  const fields = { text: "category", value: "id" };
  const [categoryData, setCategoryData] = useState("All");
  useEffect(() => {
    updateSampleSection();
  }, []);
  let gridInstance;
  let grid;

  const filData = [
    { id: "1", category: "All" },
    { id: "2", category: "Heat Shrink Tubing" },
    { id: "3", category: "Heat Shrink Molded Parts" },
    { id: "4", category: "Non-Heat Shrink Tubing" },
    { id: "5", category: "Wire and Cable" },
    { id: "6", category: "Solder Sleeves & Devices" },
    { id: "7", category: "Cable Ties" },
    { id: "8", category: "Marking Systems" },
    { id: "9", category: "Adhesive Systems" },
    { id: "10", category: "Braided Sleeving" },
  ];

  const pageOptions = {
    pageSize: 12,
    pageSizes: true,
  };

  const created = () => {
    document
      .getElementById(grid.element.id + "_searchbar")
      .addEventListener("keyup", (e) => {
        grid.search(e.target.value);
      });
  };
  const filterOptions = {
    type: "Excel",
  };

  function onChange(sel) {
    if (sel.itemData.category === "All") {
      gridInstance.clearFiltering();
      setCategoryData("All");
    } else {
      gridInstance.filterByColumn("category", "equal", sel.itemData.category);
      setCategoryData(sel.itemData.category);
    }
  }

  return (
    <>
      <div className="control-pane w-full relative z-10">
        <div className="m-2 md:m-10 p-8 md:p-10 bg-white dark:bg-slate-800 rounded-3xl">
          <div style={{ padding: "14px 0" }}>
            <div className="select-wrap">
              <DropDownListComponent
                id="ddlelement"
                dataSource={filData}
                fields={fields}
                change={onChange.bind(this)}
                placeholder="Select Category"
                width="200px"
              />
            </div>
          </div>
          <GridComponent
            ref={(g) => (grid = g)}
            toolbar={["Search"]}
            selectionSettings={selectionSettings}
            filterSettings={filterOptions}
            dataSource={allProductData}
            pageSettings={pageOptions}
            enableStickyHeader={true}
            allowFiltering={true}
            created={created}
            loadingIndicator
            allowPaging
          >
            <ColumnsDirective>
              {productGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject
              services={[Search, Page, Selection, Toolbar, Sort, Filter]}
            />
          </GridComponent>
        </div>
      </div>
    </>
  );
};
export default CardTable;
