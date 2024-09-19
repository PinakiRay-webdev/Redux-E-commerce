import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const ProductDetails = ({cat}) => {

  const {id} = useParams();

  const data = useSelector((state) => state.product.productInfo);

  const getProductCat = data.productData.find(
    (category) => category.cat_name === cat
  );

  const product = getProductCat.items
  .flatMap((subcat) => subcat.products)
  .find((item) => item.id === parseInt(id));

  return <div>
    <p>{product.productName}</p>
  </div>;
};

export default ProductDetails;
