import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const myProducts = useSelector((state) => state.product.productInfo);

  return (
    <div id="heroBannerData" className="w-full relative top-[-50vh]">
      <div className="productCat px-3 py-2 h-[60vh]">
        {myProducts.productData.map((element, id) => (
          <div
            id={"productCat" + element.id}
            className="h-full w-full relative cursor-pointer"
          >
            <Link to={`/${element.cat_name}`}>
              <img
                className="w-full h-full object-cover brightness-50 rounded-lg"
                src={element.image}
                alt={`${element.cat_name} category image`}
              />
              <h1 className="absolute text-white capitalize">
                {element.cat_name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
