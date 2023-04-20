import React from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

const SpecialCard = () => {
  const dummyData = [
    {
      id: 89,
      brand: "SAMSUNG",
      name: "SAMSUNG Galaxy Z Flip 4 ",
      desc: "Cell Phone, Factory Unlocked Android Smartphone, 256GB, Flex Mode",
      price: "$13.99",
      discountRate: "40%",
      img: "https://m.media-amazon.com/images/I/614WIYgWg7L._AC_UY436_FMwebp_QL65_.jpg",
      imgs: {
        img1: "https://m.media-amazon.com/images/I/61jqaN-jq7L._AC_SX679_.jpg",
        img2: "https://m.media-amazon.com/images/I/61bfdXk7nfL._AC_UY436_FMwebp_QL65_.jpg",
      },
    },
    {
      id: 82,
      brand: "Apple",
      name: "Apple AirPods Pro (2nd Generation) ",
      desc: "Wireless Earbuds, Up to 2X More Active Noise Cancelling,",
      price: "$100",
      discountRate: "3%",
      img: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY436_FMwebp_QL65_.jpg",
      imgs: {
        img1: "https://m.media-amazon.com/images/I/61sRKTAfrhL._AC_SX679_.jpg",
        img2: "https://m.media-amazon.com/images/I/51+vJkbGtJL._AC_SX679_.jpg",
      },
    },
    {
      id: 83,
      brand: "Dell",
      name: "DELL Optiplex 5040-SFF",
      desc: "Core i5-6500 3.2GHz, 8GB RAM, 256GB Solid State Drive, DVD, Windows 10",
      price: "$210",
      discountRate: "50%",
      img: "https://m.media-amazon.com/images/I/61F9g+9Fr1L._AC_UY436_FMwebp_QL65_.jpg",
      imgs: {
        img1: "https://m.media-amazon.com/images/I/61LszakvvbL._AC_SX679_.jpg",
        img2: "https://m.media-amazon.com/images/I/61ss7TYAdmL._AC_SX679_.jpg",
      },
    },
    {
      id: 84,
      brand: "Hp",
      name: "HP Color LaserJet Pro",
      desc: "Multifunction M479fdw Wireless Laser Printer with One-Year, Next-Business",
      price: "$150",
      discountRate: "12%",
      img: "https://m.media-amazon.com/images/I/71eIbxsnNAL._AC_UY436_FMwebp_QL65_.jpg",
      imgs: {
        img1: "https://m.media-amazon.com/images/I/71pqxNh8ALL._AC_SX679_.jpg",
        img2: "https://m.media-amazon.com/images/I/71-OtHI+JzL._AC_SX679_.jpg",
      },
    },
    {
      id: 85,
      brand: "Sony",
      name: "PlayStation 5 Digital Edition",
      desc: "",
      price: "$400",
      discountRate: "10%",
      img: "https://m.media-amazon.com/images/I/51lVhQLZn+L._AC_UY436_FMwebp_QL65_.jpg",
      imgs: {
        img1: "https://m.media-amazon.com/images/I/51fySIAYsCL._AC_UY436_FMwebp_QL65_.jpg",
        img2: "https://m.media-amazon.com/images/I/71hFbyHz8zL._SX522_.jpg",
      },
    },
    {
      id: 86,
      brand: "SanDisk",
      name: "SanDisk 2TB Extreme Portable SSD",
      desc: "Up to 1050MB/s - USB-C, USB 3.2 Gen 2 - External Solid State Drive - SDSSDE61-2T00-G25",
      price: "$149",
      discountRate: "5%",
      img: "https://m.media-amazon.com/images/I/71cxm1e19BL._AC_UL640_FMwebp_QL65_.jpg",
      imgs: {
        img1: "https://m.media-amazon.com/images/I/61p-X1dYGFL._AC_SR160,160_.jpg",
        img2: "https://m.media-amazon.com/images/I/81o88p1dh6L._AC_SX679_.jpg",
      },
    },
  ];

  const data = {
    id: 82,
    brand: "Apple",
    name: "Apple AirPods Pro (2nd Generation) ",
    desc: "Wireless Earbuds, Up to 2X More Active Noise Cancelling,",
    price: "$100",
    discountRate: "3%",
    img: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY436_FMwebp_QL65_.jpg",
    imgs: {
      img1: "https://m.media-amazon.com/images/I/61sRKTAfrhL._AC_SX679_.jpg",
      img2: "https://m.media-amazon.com/images/I/51+vJkbGtJL._AC_SX679_.jpg",
    },
  };

  let me = false;

  return (
    <div className="w-[430px] bg-white p-4 rounded-md my-6">
      <div className=" flex justify-between">
        <div className="py-1 px-2 rounded-xl text-[0.63rem] text-center  bg-[#ECCF38]  font-medium">
          <p>30%</p>
        </div>

        {me ? (
          <HiHeart className=" cursor-pointer" />
        ) : (
          <HiOutlineHeart className=" cursor-pointer " />
        )}
      </div>

      <div className="mt-8 flex mb-6 gap-6">
        <div>
          <img
            src={data.img}
            alt=""
            className="w-[192px] h-[166px]  object-contain px-[24.5px] py-[16.5px]"
          />

          <div className=" flex gap-[14px] mt-3">
            <img
              src={data.imgs.img1}
              alt=""
              className=" w-[89px] h-[79px]  object-contain border px-[10.5px] py-[8.5px]"
            />
            <img
              src={data.imgs.img2}
              alt=""
              className=" w-[89px] h-[79px]  object-contain border px-[10.5px] py-[8.5px]"
            />
          </div>
        </div>

        <div className="my-auto w-[192px] px-4 ">
          <p className="text-[.75rem] font-semibold text-[#AC8243]">
            {data.brand}
          </p>
          <p className=" text-[0.7rem] my-3  font-semibold  leading-4">
            Samsung Galaxy NOTE10+ Mobile Phone: Sim...
          </p>

          <div className="flex gap-4">
            <p className="text-[0.7rem] mb-6 font-medium text-red-400">
              {data.price}
            </p>
            <p className="text-[0.7rem] mb-6 font-medium text-gray-400 line-through">
              $300.00
            </p>
          </div>

          <input type="range" className="w-full" />
          <button className="text-[0.7rem] font-roboto  font-medium   text-white bg-[#232738] py-2 px-6 rounded-full">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
