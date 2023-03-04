import React, { useEffect, useState } from "react";
import { client } from "../client";

const ProductInfo = () => {
  const [allProductData, setAllProductData] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        product_name,
        master_category,
        sub_category,
        product_category,
        description,
        shrink_ratio,
        size_range,
        specifications,
        applications,
        data_sheet
        }`
      )
      .then((data) => {
        console.log(data);
        setAllProductData(data);
      })
      .catch(console.error);
  }, []);
  // {post.product_name} + post.data_sheet}}
  return (
    <>
      {allProductData &&
        allProductData
          .map((post, index) => (
            <div key={index}>
              <div>&#123;</div>
              <div>key: {index},</div>
              <div>name: '{post.product_name}',</div>
              <div>shrinkRatio: '{post.shrink_ratio}',</div>
              <div>sizeRange: '{post.size_range}',</div>
              <div>specifications: '{post.specifications}',</div>
              <div>applications: '{post.applications[0].children[0].text}',</div>
              <div>description: '{post.description[0].children[0].text}',</div>
              <div>dataSheet: '{post.data_sheet}',</div>
              <div>Category: '{post.master_category._ref}',</div>
              <div>subCategory: '{post.sub_category._ref}',</div>
              <div>&#125;,</div>
            </div>
          ))}
    </>
  );
};

export default ProductInfo;

