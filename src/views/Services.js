import Footer from "components/Footers/Footer";
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React from "react";

const Services = () => {
  return (
    <div>
      <IndexNavbar />
      <div className="flex items-center justify-center w-9/12 h-screen">
        <p className="text-lg leading-relaxed text-center">
          At Stranco Products, we are proud to offer an extensive range of services to meet all of your tubing and electrical insulation needs. As the largest distributor of heat shrinkable tubing products and electrical insulation in the Midwest, we have the knowledge and expertise to help you find the perfect solution for your unique application. <br />
          <br />
          In addition to our vast inventory, we offer a variety of value-added services to enhance your experience and make your job easier. Our services include cut-to-length capabilities, hot stamp printing, thermal transfer printing, kitting, custom spooling and packaging, EDI and barcoding capabilities, samples and engineering assistance, just-in-time delivery coordination, and ISO/TS 16949 certification.<br />
          <br />
          We also offer PPAP and IMDS capabilities, ensuring that our products meet the highest standards and requirements for the automotive, medical, electronics, appliance, aerospace, military, and other industries we serve. Our Customer Service Representatives each average 10+ years of experience and are always willing to help with all of your requests.<br />
          <br />
          Please do not hesitate to contact us via email or phone with any inquiries you may have. We look forward to working with you to find the best solutions for your tubing and electrical insulation needs.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
