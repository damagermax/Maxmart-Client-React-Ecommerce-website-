import FeatureCard from "./FeatureCard";
import { useState } from "react";

export default function Featured() {
  const dummyData = [
    {
      id: 0,
      brand: "Sony",
      name: "Sony WH-1000XM5 Wireless Industry Leading Headphones with Auto Noise Canceling Optimizer",
      img: "https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_UL640_FMwebp_QL65_.jpg",
      price: 30,
      discountRate: "-9%",
    },
    {
      id: 2,
      brand: "Lumix",
      name: "Panasonic LUMIX FZ300 Long Zoom Digital Camera Features 12.1 Megapixel",
      img: "https://m.media-amazon.com/images/I/81xVbbwlqlL._AC_UY436_FMwebp_QL65_.jpg",
      price: 250,
      discountRate: "-56%",
    },
    {
      id: 3,
      brand: "Havelis",
      name: "Havelis Tab A7 Lite 8.7 32GB WiFi Android Tablet w/ Long Lasting Battery, Compact",
      img: "https://m.media-amazon.com/images/I/819hAP4xoGS._AC_UL640_FMwebp_QL65_.jpg",
      price: 999,
      discountRate: "-70%",
    },
    {
      id: 4,
      brand: "Rico",
      name: "Citizen Eco-Drive Garrison Men's Watch, Stainless Steel with Nylon Strap, Weekender",
      img: "https://m.media-amazon.com/images/I/81t0KQkVwpS._AC_UL640_FMwebp_QL65_.jpg",
      price: 30,
      discountRate: "-6%",
    },
    {
      id: 5,
      brand: "SamSung",
      name: "SAMSUNG Galaxy Buds 2 True Wireless Earbuds Noise Cancelling ",
      img: "https://m.media-amazon.com/images/I/31npcYgXpTL._AC_UY436_FMwebp_QL65_.jpg",
      price: 30,
      discountRate: "-50%",
    },
    {
      id: 0,
      brand: "Sony",
      name: "Sony WH-1000XM5 Wireless Industry Leading Headphones with Auto Noise Canceling Optimizer",
      img: "https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_UL640_FMwebp_QL65_.jpg",
      price: 30,
      discountRate: "-9%",
    },
    {
      id: 2,
      brand: "Lumix",
      name: "Panasonic LUMIX FZ300 Long Zoom Digital Camera Features 12.1 Megapixel",
      img: "https://m.media-amazon.com/images/I/81xVbbwlqlL._AC_UY436_FMwebp_QL65_.jpg",
      price: 250,
      discountRate: "-56%",
    },
    {
      id: 3,
      brand: "Havelis",
      name: "Havelis Tab A7 Lite 8.7 32GB WiFi Android Tablet w/ Long Lasting Battery, Compact",
      img: "https://m.media-amazon.com/images/I/819hAP4xoGS._AC_UL640_FMwebp_QL65_.jpg",
      price: 999,
      discountRate: "-70%",
    },
    {
      id: 4,
      brand: "Rico",
      name: "Citizen Eco-Drive Garrison Men's Watch, Stainless Steel with Nylon Strap, Weekender",
      img: "https://m.media-amazon.com/images/I/81t0KQkVwpS._AC_UL640_FMwebp_QL65_.jpg",
      price: 30,
      discountRate: "-6%",
    },
    {
      id: 5,
      brand: "SamSung",
      name: "SAMSUNG Galaxy Buds 2 True Wireless Earbuds Noise Cancelling ",
      img: "https://m.media-amazon.com/images/I/31npcYgXpTL._AC_UY436_FMwebp_QL65_.jpg",
      price: 30,
      discountRate: "-50%",
    },
  ];

  const [product, setProducts] = useState(dummyData);

  return (
    <section className="w-full px-[1rem] md:px-[2rem] mt-12 ">
      <h2 className="text-[1.2rem] sm:text-[1.3rem] lg:text-[1.5rem] font-medium font-roboto">
        Featured Collection
      </h2>

      <div className=" flex gap-4  max-w-full  overflow-y-auto">
        {product.map((data) => {
          return (
            <FeatureCard
              key={data.id}
              id={data.id}
              name={data.name}
              brand={data.brand}
              img={data.img}
              discountRate={data.discountRate}
              price={data.price}
            />
          );
        })}
      </div>
    </section>
  );
}
