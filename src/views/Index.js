import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer";
import Brands from "components/HomeComponents/Brands";
import ProductCategories from "components/HomeComponents/ProductCategories";
import InformationSection from "components/HomeComponents/InformationSection";
import HeroSection from "components/HomeComponents/HeroSection";
import ProductCatalogSection from "components/HomeComponents/ProductCatalogSection";

const Index = () => {
  return (
    <>
      <IndexNavbar fixed />
      <HeroSection />

      <section className="mt-48 md:mt-40 relative bg-slate-100 dark:bg-[#182030]">
        <div className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-100 dark:text-[#182030] fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <InformationSection />
        <Brands />
      </section>

      <ProductCatalogSection />

      <section className="pb-16 bg-slate-200 dark:bg-[#182030] relative pt-32">
        <div className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-200 dark:text-[#182030] fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 flex flex-wrap justify-center px-12 -mt-64 bg-white rounded-lg shadow-xl dark:bg-slate-800">
            <div className="mt-32 sm:mt-0">
              <ProductCategories />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
