import React from "react";
import { Routes, Route } from "react-router-dom";

import { specificProductsGrid, generalProductsGrid } from "data/dummy";
import specificProducts from "data/stranco-specific-products.json";
import generalProducts from "data/stranco-general-products.json";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import Tables from "views/admin/Tables.js";
import FooterSmall from "components/Footers/FooterSmall";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative flex flex-col min-h-screen text-xs font-medium uppercase md:ml-64 dark:bg-slate-850 dark:text-gray-400">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="w-full px-6 mx-auto my-auto mb-auto -mt-12 md:px-2">
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex flex-col gap-16">
                  <Tables
                    grid={generalProductsGrid}
                    products={generalProducts}
                  />
                  <Tables
                    grid={specificProductsGrid}
                    products={specificProducts}
                  />
                </div>
              }
            />
            <Route
              path="all-products"
              element={
                <div className="flex flex-col gap-16">
                  <Tables
                    grid={generalProductsGrid}
                    products={generalProducts}
                  />
                  <Tables
                    grid={specificProductsGrid}
                    products={specificProducts}
                  />
                </div>
              }
            />
          </Routes>
        </div>
        <FooterSmall />
      </div>
    </>
  );
}
