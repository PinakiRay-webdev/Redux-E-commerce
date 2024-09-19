import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Ratings from "../Components/Ratings";
import { FaRegHeart } from "react-icons/fa";
import { addToCart } from "../Slice/cartSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({ cat }) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.productInfo);

  const getProductCat = data.productData.find(
    (category) => category.cat_name === cat
  );

  const product = getProductCat.items
    .flatMap((subcat) => subcat.products)
    .find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Item added to cart" , {theme:"colored"})
  };

  return (
    <div className="w-full h-fit">
      <div className="py-4 px-3 flex justify-between">
        {/* product images  */}
        <div id="productBox" className="w-[40%] h-[80vh] flex flex-col">
          {/* current displayed image  */}
          <div className="h-[83%] border-b border-gray-400">
            <img
              className="w-full h-full object-contain"
              src={product.catImg}
              alt=""
            />
          </div>

          {/* related images */}
          <div
            id="relatedBox"
            className="flex justify-between mt-3 w-full h-[15%]"
          >
            {product.productImages?.map((Element, id) => (
              <div key={id} className="w-20 h-full">
                <img
                  className="w-full h-full object-contain"
                  src={Element}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* product details  */}
        <div className="w-[40%] relative">
          {/* heading of the product  */}
          <header>
            <h3 className="font-semibold text-zinc-800">{product.brand}</h3>
          </header>

          {/* name of the product  */}
          <h1 className="text-3xl py-2">{product.productName}</h1>

          {/* rating of the product  */}
          <Ratings rate={Math.floor(product.rating)} />

          {/* description of the product  */}

          <p className="text-zinc-700 py-5">{product.description}</p>

          {/* price of the product  */}

          <div className="flex items-start gap-1 pt-6">
            <p className="text-7xl">{product.price}</p>
            <p className="text-xl line-through text-zinc-600">
              {product.oldPrice}
            </p>
            <p className="text-white bg-red-600 px-1 rounded-full text-xs ml-5">
              - {product.discount}%
            </p>
          </div>

          {/* weights or sizes of the product  */}

          <p className="text-zinc-600">
            {`${product.weight}.length === 0` ? "Ram" : "weight"}:
          </p>

          <div id="productPrice" className="flex items-center gap-2">
            {product.weight?.length === 0
              ? product.RAM?.map((element, id) => (
                  <p
                    key={id}
                    className="border border-zinc-400 cursor-pointer text-black bg-white px-3 py-1 rounded-lg"
                  >
                    {element}
                  </p>
                ))
              : product.weight?.map((element, id) => (
                  <p
                    key={id}
                    className="border border-zinc-400 cursor-pointer text-black bg-white px-3 py-1 rounded-lg"
                  >
                    {element}
                  </p>
                ))}
          </div>

          {/* footer section  */}
          <div className="absolute bottom-0 w-full">
            <div className="flex items-center gap-7">
              <button onClick={handleAddToCart} className="text-white bg-black w-full py-2 rounded-lg ">
                Add to cart
              </button>
              <p className="text-white bg-black px-4 py-3 rounded-lg">
                <FaRegHeart />
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ProductDetails;
