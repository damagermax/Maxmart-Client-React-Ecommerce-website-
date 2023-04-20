import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

export default function FeatureCard(props) {
  let me = false;
  return (
    <div className="my-6 min-w-[250px] w-[250px] bg-white py-4 px-4   font-sans rounded-md">
      <div className=" flex justify-between">
        <div className="py-1 px-2 rounded-xl text-[0.63rem] text-center  bg-[#ECCF38]  font-medium">
          <p>{props.discountRate}</p>
        </div>

        {me ? (
          <HiHeart className=" cursor-pointer" />
        ) : (
          <HiOutlineHeart className=" cursor-pointer " />
        )}
      </div>

      <img
        src={props.img}
        alt=""
        className="h-[240px] w-full object-contain p-8 "
      />

      <p className="text-[.75rem] font-semibold text-[#AC8243]">
        {props.brand}
      </p>
      <p className=" text-[0.7rem] my-3 max-w-[150px] font-semibold">
        {props.name}
      </p>

      <p className="text-[0.7rem] mb-6 font-medium">{props.price}</p>
    </div>
  );
}
