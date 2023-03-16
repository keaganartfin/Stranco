import React from "react";
import { Routes, Route } from "react-router-dom";

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
      <div className="relative min-h-screen text-xs font-medium uppercase md:ml-64 dark:bg-slate-850 dark:text-gray-400">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="w-full px-0 mx-auto my-auto mb-auto -m-24 md:px-10">
          <Routes>
            <Route path="/" element={<Tables />} />
            <Route path="dashboard" element={<Tables />} />
          </Routes>
          <FooterSmall />
        </div>
      </div>
    </>
  );
}
