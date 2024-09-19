import React from "react";
import { CiSearch , CiLocationOn , CiUser  , CiHeart} from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-fit bg-black">
      <div className="px-3 h-[10vh] flex items-center justify-between">

        {/* left navigation part */}

        <div className="flex items-center gap-14" >
        {/* logo part  */}
        <Link to={'/'} >        
        <div>
          <h1 className="text-white text-2xl font-bold">Brand</h1>
        </div>
        </Link>

        {/* geolocation part  */}
        <div className="flex items-center gap-1" >
            <p className="text-white text-3xl"><CiLocationOn/></p>
            <p  className="text-white text-xs" >Update <br /> <span className="text-sm font-semibold" >your location</span> </p>
        </div>
        </div>

        {/* right nav part  */}
        <div className="flex items-center gap-9">
          {/* search part  */}
          <div className="bg-white flex items-center justify-between w-[47vw] rounded-md">
            <input
              className="bg-transparent pl-2 outline-none"
              type="text"
              placeholder="Search amazon.in"
            />
            <div className="bg-amber-400 h-full py-2 px-3">
              <CiSearch />
            </div>
          </div>

          {/* sign in part  */}
          <div className="flex items-center gap-1">
          <p className="text-white text-3xl"><CiUser/></p>
          <p className="text-white text-xs cursor-pointer">
            Hello sign in <br />{" "}
            <span className="text-sm font-semibold">Accounts and list</span>{" "}
          </p>
          </div>

          {/* wishlist part  */}
          <div className="flex items-center gap-1" >
          <p className="text-white text-3xl"><CiHeart/></p>
          <p className="text-white text-xs cursor-pointer">
            Wishlist <br />{" "}
            <span className="text-sm font-semibold">& Favourites</span>
          </p>
          </div>

          {/* cart part  */}
          <Link to={'/cart'} >          
          <div className="flex items-end">
            <p className="text-white text-3xl">
              <IoIosCart />
            </p>
            <span className="text-xs text-white">Cart</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
