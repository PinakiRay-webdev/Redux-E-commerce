import React from "react";
import { FaStar, FaHeart, FaLifeRing } from "react-icons/fa";
import myBg from "../assets/bg.png";
import heroBG from '../assets/heroBG.jpg'
const Hero = () => {
  return (
    <div className="w-full h-fit bg-slate-200">
      <div className="h-[90vh] flex items-center justify-between">
      <img className="w-full h-full object-fill" src={heroBG} alt="" />
      </div>
    </div>
  );
};

export default Hero;
