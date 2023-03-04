import React from "react";
import { Routes, Route } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

// views

import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import FooterSmall from "components/Footers/FooterSmall";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 dark:bg-slate-850 dark:text-gray-400 text-xs uppercase font-medium min-h-screen">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto my-auto w-full -m-24 mb-auto">
          <Routes>
            <Route path="/" element={<Tables />} />
            <Route path="dashboard" element={<Tables />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
          <FooterSmall />
        </div>
      </div>
    </>
  );
}
