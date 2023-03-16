import React from "react";
import Footer from "components/Footers/Footer";
import CategoryPage from "views/products/CategoryPage";
import { Route, Routes } from "react-router-dom";
import ProductInfo from "views/products/ProductInfo";
import ProductsNavbar from "components/Navbars/ProductsNavbar";

export default function Products() {
  return (
    <>
      <ProductsNavbar />
      <div className="relative dark:bg-slate-850 dark:text-gray-400 text-xs font-medium min-h-screen">
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="product-details/:id" element={<ProductInfo />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
