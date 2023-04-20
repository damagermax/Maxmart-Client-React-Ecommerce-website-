import React from "react";
import laptop from "../assets/mac.webp";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsTruck, BsShop, BsArrowRepeat } from "react-icons/bs";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Select from "react-select";

import { FaBoxOpen, FaBiking } from "react-icons/fa";
import FeedbackCard from "../component/FeedbackCard";

const Image = () => {
  return (
    <div className="max-w-[380px]  bg-white">
      <div>
        <img
          src={"https://m.media-amazon.com/images/I/41NJxnLlICL._AC_SX679_.jpg"}
          alt=""
          className="w-full h-[300px]sm: md:h-[350px] object-contain p-6"
        />
      </div>

      <div className=" hidden sm:flex justify-center gap-4 max-w-full overflow-scroll sm:gap-2 mt-2 ">
        <img
          src={laptop}
          alt=""
          className=" sm:w-[60px] w-[50px] h-[55px] sm:h-[65px] object-contain p-2 border"
        />
        <img
          src={laptop}
          alt=""
          className=" sm:w-[60px] w-[50px] h-[55px] sm:h-[65px] object-contain p-2 border"
        />
        <img
          src={"https://m.media-amazon.com/images/I/513p5+TEiDL._AC_SX679_.jpg"}
          alt=""
          className=" sm:w-[60px] w-[50px] h-[55px] sm:h-[65px] object-contain p-2 border"
        />
        <img
          src={laptop}
          alt=""
          className=" sm:w-[60px] w-[50px] h-[55px] sm:h-[65px] object-contain p-2 border"
        />
      </div>
    </div>
  );
};

const Promotion = () => {
  return (
    <div>
      <h2 className=" font-roboto mt-2 mb-4 ">Promotions</h2>
      <div className="flex gap-3">
        <FaBoxOpen size={20} className="text-yellow-400" />
        <a href="" className=" text-[0.8rem] text-blue-600">
          Enjoy cheaper delivery fees when you select a pickup station at
          checkout
        </a>
      </div>

      <div className="flex gap-3 mt-3">
        <FaBiking size={20} className="text-yellow-400" />
        <a href="" className=" text-[0.8rem] text-blue-600">
          Free Delivery in Accra for Orders above GHC80. Pick up stations only!{" "}
          <br />
          (Excluding Large)
        </a>
      </div>
    </div>
  );
};
const ProductInfo = () => {
  const [value, setValue] = useState(5);

  return (
    <div className="p-6">
      <h2 className=" font-roboto font-medium  text-gray-700 text-[1.2rem]">
        Apple MacBook Air 13in (256GB SSD, M1, 8GB) Laptop - Silver - MGN63LL/A
      </h2>
      <p className="text-[0.75rem] text-gray-500 mt-2">
        Brand : <span>amazon renewed</span>
      </p>
      <div className="mt-3 flex text-[0.75rem] items-center gap-3 text-gray-600 font-medium ">
        <ReactStars
          count={5}
          value={value}
          onChange={value}
          size={13}
          edit={false}
          activeColor="#ffd700"
        />

        <p>122 ratings</p>
        <hr className="bg-gray-400 w-[1px] h-[12px]" />
        <p>20 comments</p>
      </div>
      <p className="text-[0.7rem] text-green-500 mt-2">In stock</p>
      <p className="text-[0.9rem] text-gray-700 mt-3 font-medium">
        Pice : <span className="text-[1.2rem]">$308</span>
      </p>
      <div className="flex items-center gap-2 mt-8">
        <button className="border p-2 rounded-sm">
          <BiMinus />
        </button>

        <p className="border rounded-sm py-2 px-4 font-semibold text-[0.7rem]">
          Quantity: <span>2</span>
        </p>
        <button className="border p-2 rounded-sm">
          <BiPlus />
        </button>
      </div>
      <div className="text-white text-[0.7rem] font-roboto font-medium flex gap-2 flex-col sm:flex-row mt-4">
        <button className="bg-[#2e344ae1] py-2 px-6 md:w-[120px] rounded-sm">
          Add to cart
        </button>
        <button className="bg-[#2E344A] py-2 px-6 md:w-[120px] rounded-sm">
          Buy now
        </button>
      </div>
      <hr className="mt-8" />

      <Promotion />
    </div>
  );
};

const CustomerFeedback = () => {
  return (
    <section className="bg-white  mt-4 pb-6">
      <h2 className="py-3 px-4 font-roboto text-[1.1rem]">Customer Feedback</h2>
      <hr className="mb-3" />

      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
    </section>
  );
};

const DeliveryAndReturn = () => {
  const options = [
    { value: "Kumasi", label: "Kumasi" },
    { value: "Accra", label: "Accra" },
    { value: "Volta", label: "Volta" },
  ];
  return (
    <div className="w-full  bg-white">
      <p className=" px-4 py-2 font-roboto text-[0.9rem] uppercase">
        Delivery & Returns
      </p>

      <hr />

      <h2 className="pt-2 px-4 font-roboto text-[1.1rem] ">
        Choose your location
      </h2>

      <div className="px-4 py-2 ">
        <Select options={options} className="text-[0.9rem]" />

        <Select options={options} className="mt-4 text-[0.9rem]" />
      </div>

      <div className="px-4 mt-2 flex gap-2 mb-4">
        <div>
          <BsTruck className="border  rounded-sm p-2 text-gray-500" size={40} />
        </div>

        <div>
          <div className="flex justify-between ">
            <p className="text-[0.87rem]">Door Delivery</p>
            <a href="" className="text-[0.7rem] text-blue-700">
              Details
            </a>
          </div>

          <p className="text-[0.75rem] my-[3px] text-gray-500">
            Delivery <span className=" text-gray-800">GH₵ 14.97</span>
          </p>
          <p className="text-[0.75rem]  text-gray-500 leading-tight">
            Ready for delivery between{" "}
            <span className=" text-gray-800">10 March</span> &{" "}
            <span className=" text-gray-800">13 March</span> when you order
            within next <span className=" text-gray-800">2hrs 46mins</span>
          </p>
        </div>
      </div>

      <div className="px-4 mt-2 flex gap-2">
        <div>
          <BsShop className="border  rounded-sm p-2 text-gray-500" size={40} />
        </div>

        <div>
          <div className="flex justify-between ">
            <p className="text-[0.87rem]">Pickup Station</p>
            <a href="" className="text-[0.7rem] text-blue-700">
              Details
            </a>
          </div>

          <p className="text-[0.75rem] my-[2px] text-gray-500">
            Delivery <span className=" text-gray-800">GH₵ 14.97</span>
          </p>
          <p className="text-[0.75rem]  text-gray-500 leading-tight">
            Ready for delivery between{" "}
            <span className=" text-gray-800">10 March</span> &{" "}
            <span className=" text-gray-800">13 March</span> when you order
            within next <span className=" text-gray-800">2hrs 46mins</span>
          </p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="px-4 mt-2 flex gap-2 pb-2">
        <div>
          <BsArrowRepeat
            className="border  rounded-sm p-2 text-gray-500"
            size={40}
          />
        </div>

        <div>
          <p className="text-[0.87rem]">Return policy</p>
          <p className="text-[0.75rem]  text-gray-500 mt-1 leading-tight">
            Free return within 15 days for all eligible items.
            <span>
              <a href="" className="text-[0.7rem] text-blue-700 ml-1">
                See more
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
const ProductDetail = () => {
  return (
    <div className="flex px-[1rem] md:px-[2rem]  mt-8  mb-8  gap-3 justify-between">
      <div className="max-w-[1010px]">
        <div className="flex  bg-white flex-col sm:flex-row pb-6  items-center sm:items-start">
          <Image />
          <ProductInfo />
        </div>
        <CustomerFeedback />
      </div>

      <aside className="min-w-[240px] w-[350px] hidden lg:block rounded-md h-fit sticky top-4  ">
        <DeliveryAndReturn />
      </aside>
    </div>
  );
};

export default ProductDetail;
