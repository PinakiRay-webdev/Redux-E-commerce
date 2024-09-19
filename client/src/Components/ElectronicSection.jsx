import React from "react";
import { useSelector } from "react-redux";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import electronicBg from '../assets/electronicBG.jpg'
const ElectronicSection = () => {
  const Products = useSelector((state) => state.product.productInfo);
  
  const eletronicsProduct = Products.productData.find(category => category.cat_name === "Electronics")
  return (
    <div className="w-full h-fit" >
      <img src={electronicBg} alt="" />
        <div className="px-3">
        {eletronicsProduct.items?.map((Element , id)=>(
                  <div>
                  {/* header part  */}
                  <header className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-600 w-4 h-8 rounded-md"></div>
                      <p
                        className="w-fit rounded-lg capitalize text-xl font-semibold"
                        key={id}
                      >
                        {Element.cat_name}
                      </p>
                    </div>
      
                    <div className="flex items-center gap-3 text-4xl pr-6">
                      <p>
                        <FaChevronCircleLeft />
                      </p>
                      <p>
                        <FaChevronCircleRight />
                      </p>
                    </div>
                  </header>
      
                  {/* product container  */}
                  <div
                    id="productContainer"
                    className="flex gap-6 overflow-x-auto py-5"
                  >
                    {/* product card part  */}
      
                    {Element.products.map((products, idx) => (
                      <Link to={`/${eletronicsProduct.cat_name}/${products.id}`}>
                        <div
                          className="shadow-xl py-5 px-2 rounded-md relative h-[28rem] min-w-[18rem] cursor-pointer"
                          key={idx}
                        >
                          <div className="h-[60%] relative">
                            <img
                              className="mx-auto w-full h-full object-contain"
                              src={products.catImg}
                              alt=""
                            />
                            <p className="bg-red-600 w-fit text-white rounded-full px-2 py-1 text-xs absolute top-2 left-0">
                              - {products.discount}%
                            </p>
                          </div>
                          <div className="pt-8">
                            <h1 className="font-semibold pb-3">
                              {`${products.productName}`.length > 22
                                ? `${products.productName}`.substring(0, 20) +
                                  "...more"
                                : products.productName}
                            </h1>
                            <p className="text-sm">Brand: {products.brand}</p>
                            <Ratings rate={Math.floor(products.rating)} />
      
                            <div className="flex gap-2 items-center pt-1">
                              <p className="text-sm text-red-500 font-medium">
                                ${products.price}
                              </p>
                              <p className="text-gray-400 line-through text-sm">
                                ${products.oldPrice}
                              </p>
                            </div>
                          </div>
                          {/* buttons */}
                          <div className="flex items-center justify-between absolute bottom-0 border w-full left-0">
                            <button className="w-[50%]">Buy now</button>
                            <button className="w-[50%] bg-black text-white h-full py-2 text-sm">
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
      ))}
        </div>
    </div>
  );
};

export default ElectronicSection;
