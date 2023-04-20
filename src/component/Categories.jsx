import Category from "./Category";
import { useState } from "react";

export default function Categories() {
  const dummyData = [
    {
      id: 678,
      name: "Computers & Laptops",
      itemsCount: "4 items",
      imgUrl:
        "https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: 892,
      name: "Camera",
      itemsCount: "6 items",
      imgUrl:
        "https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: 8,
      name: "Smart Television",
      itemsCount: "90 items",
      imgUrl:
        "https://m.media-amazon.com/images/I/61IZcaEIt4L._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: 82,
      name: "Smart Watches",
      itemsCount: "20 items",
      imgUrl:
        "https://m.media-amazon.com/images/I/5115eW1YX9L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: 3,
      name: "Gaming",
      itemsCount: "50 items",
      imgUrl:
        "https://m.media-amazon.com/images/I/71pFnHBrvgL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: 87,
      name: "Mbiles & Tablets",
      itemsCount: "50 items",
      imgUrl:
        "https://m.media-amazon.com/images/I/518kGVV5BxL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: 24,
      name: "Headphones",
      itemsCount: "50 items",
      imgUrl:
        "https://m.media-amazon.com/images/I/71WdPCSOq+L._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: 45,
      name: "Accessories",
      itemsCount: "50 items",
      imgUrl:
        "https://m.media-amazon.com/images/I/51-b1fQPKsL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: 247,
      name: "Portable Speakers",
      itemsCount: "50 items",
      imgUrl:
        "https://m.media-amazon.com/images/I/81uNGVWyQqL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: 43,
      name: "Home Aplliances",
      itemsCount: "50 items",
      imgUrl:
        "https://m.media-amazon.com/images/I/710VY4djFDL._AC_UL640_FMwebp_QL65_.jpg",
    },
  ];

  const [data, setData] = useState(dummyData);

  return (
    <section className=" rounded-md bg-white px-4 sm:px-8 mt-12 py-6 mx-[1rem] sm:mx-[2rem] grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5   sm:gap-4">
      {data.map((data) => {
        return (
          <Category
            key={data.id}
            name={data.name}
            itemsCount={data.itemsCount}
            img={data.imgUrl}
          />
        );
      })}
    </section>
  );
}
