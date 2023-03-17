import React from "react";
import { Routes, Route } from "react-router-dom";

// Data imports
import { specificProductsGrid, generalProductsGrid } from "data/dummy";
import specificProducts from "data/stranco-specific-products.json";
import generalProducts from "data/stranco-general-products.json";

// Components imports
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import Tables from "views/admin/Tables.js";
import FooterSmall from "components/Footers/FooterSmall";

const Admin = () => {
  const renderTables = () => (
    <div className="flex flex-col gap-16">
      <Tables grid={generalProductsGrid} products={generalProducts} />
      <Tables grid={specificProductsGrid} products={specificProducts} />
    </div>
  );

  return (
    <>
      <Sidebar />
      <div className="relative flex flex-col min-h-screen text-xs font-medium uppercase md:ml-64 dark:bg-slate-850 dark:text-gray-400">
        <AdminNavbar />
        <HeaderStats />
        <main className="w-full px-6 mx-auto my-auto mb-auto -mt-12 md:px-2">
          <Routes>
            <Route path="/" element={renderTables()} />
            <Route path="/all-products" element={renderTables()} />
          </Routes>
        </main>
        <FooterSmall />
      </div>
    </>
  );
};

export default Admin;
