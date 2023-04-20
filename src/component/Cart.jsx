import { BiMinus, BiPlus } from "react-icons/bi";

const ItemCount = () => {
  return (
    <div className="flex items-center border rounded-sm w-fit h-fit">
      <button className=" p-1 ">
        <BiMinus />
      </button>

      <p className=" py-1 px-3 border-x  text-[0.7rem]">2</p>
      <button className="p-1 ">
        <BiPlus />
      </button>
    </div>
  );
};

const CartItem = ({ data }) => {
  return (
    <div className=" hover:bg-gray-100 hover:cursor-pointer">
      <div className="flex gap-2  pt-3">
        <div className="h-[70px] w-[70px] p-1">
          <img
            src={data.img}
            className=" object-contain  mix-blend-multiply"
          ></img>
        </div>

        <div className="w-full">
          <div className="flex justify-between">
            <p className="text-[0.8rem]  text-gray-500">{data.name}</p>
            <p className="px-2 hidden hover:block">X</p>
          </div>
          <div className="flex  justify-between items-center mt-2 mb-3">
            <p className="text-[.9rem] font-medium text-gray-800">
              {data.price}
            </p>
            <ItemCount />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

const Cart = () => {
  const cart = [
    {
      name: "Hp 240 G8 Notebook PC 10th Gen Intel Core i3 - 4GB RAM -",
      img: "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/574187/1.jpg?5416",
      price: "GH₵ 3,899.00",
      id: 1,
    },
    {
      name: "Samsung S23 Ultra- 256GB HDD- 12GB RAM- Black",
      img: "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/1284501/1.jpg?9784",
      price: "GH₵ 15,989.26",
      id: 2,
    },
    {
      name: "Winner 302 Portable Wireless Bluetooth 5.0 Speaker - Black",
      img: "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/070843/1.jpg?1364",
      price: "GH₵ 69.00",
      id: 3,
    },
    {
      name: "500GB USB2.0 Portable Hard Disk Mobile Hard Drive",
      img: "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/509484/1.jpg?1832",
      price: "GH₵ 468.00",
      id: 4,
    },
    {
      name: "Winner 302 Portable Wireless Bluetooth 5.0 Speaker - Black",
      img: "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/070843/1.jpg?1364",
      price: "GH₵ 69.00",
      id: 3,
    },
    {
      name: "500GB USB2.0 Portable Hard Disk Mobile Hard Drive",
      img: "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/509484/1.jpg?1832",
      price: "GH₵ 468.00",
      id: 4,
    },
    {
      name: "Winner 302 Portable Wireless Bluetooth 5.0 Speaker - Black",
      img: "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/070843/1.jpg?1364",
      price: "GH₵ 69.00",
      id: 3,
    },
    {
      name: "500GB USB2.0 Portable Hard Disk Mobile Hard Drive",
      img: "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/509484/1.jpg?1832",
      price: "GH₵ 468.00",
      id: 4,
    },
  ];

  return (
    <div className="modal w-full h-full absolute inset-0  ">
      <div className=" bg-white h-full w-screen sm:w-[25rem]  flex  flex-col justify-between absolute right-0 p-4">
        <div>
          <h1 className="text-[1.2rem] font-semibold mb-6">Cart</h1>

          <div className="sm:max-h-[610px] overflow-x-scroll no-scrollbar">
            {cart.map((data) => {
              return <CartItem key={data.id} data={data} />;
            })}
          </div>
        </div>

        <div className="mb-2 w-full  shadow-xl ">
          <hr />
          <p className="text-xs mb-2 text-gray-500 mt-4">
            Delivery fees not included yet.
          </p>
          <button className=" text-white bg-[#2E344A] shadow-md py-3 px-4 rounded-sm w-full text-[.875rem]  font-normal">
            CHECKOUT (GH₵ 3,700.00)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
