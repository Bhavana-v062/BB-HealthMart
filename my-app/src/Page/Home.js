import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";
import  {useNavigate} from "react-router-dom";    // ✅ Import navigation hook

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const navigate = useNavigate();
  
  const homeProductCartList = productData.slice(1, 5); 
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "Vegetables"
  );

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();

  // ✅ Scroll functions
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  // ✅ Handle Navigation to Menu Page
  const handleOrderNow = () => {
    navigate('/menu/67dd3566876f3930d8a0c508');     // 🚀 Navigate to the Menu page
  };

  // ✅ Ensure everything is inside the component function
  return (
    <div className="p-2 md:p-4">
      {/* ✅ Top Section */}
      <div className="md:flex gap-4 py-2">
        {/* Left Section */}
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
              alt="Bike Delivery"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fastest Delivery in{" "}
            <span className="text-red-600">Your Home</span>
          </h2>
          <p className="py-3 text-base ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry's standard dummy text ever since
            the 1500s.
          </p>
          <button
           onClick={handleOrderNow}
           className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md hover:bg-red-600 transition">
            Order Now
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList.length > 0
            ? homeProductCartList.map((el) => (
                <HomeCard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              ))
            : loadingArray.map((_, index) => (
                <HomeCard key={index + "loading"} loading="Loading..." />
              ))}
        </div>
      </div>

      {/* ✅ Vegetable Section with Scroll */}
      <div className="my-8">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={prevProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>

        {/* Scrollable Product List */}
        <div
          className="flex gap-5 overflow-x-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables.length > 0
            ? homeProductCartListVegetables.map((el) => (
                <CardFeature
                  key={el._id + "vegetable"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              ))
            : loadingArrayFeature.map((_, index) => (
                <CardFeature key={index + "cartLoading"} loading="Loading..." />
              ))}
        </div>
      </div>

      {/* ✅ Display All Products */}
      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;


