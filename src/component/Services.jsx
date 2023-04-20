import { HiOutlineTruck, HiOutlineGift, HiOutlineStar } from "react-icons/hi";
import { IoCardOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";

export default function Services() {
  return (
    <section
      className="w-full px-[1rem] md:px-[2rem] lg:px-[4rem] mx-auto  py-10  gap-8  text-[0.8rem] 
       grid  sm:justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 "
    >
      <div className="flex items-center gap-2">
        <HiOutlineTruck size={30} />
        <div>
          <p className=" text-[#0F0F0F] font-medium">Free Shipping</p>
          <p className="text-[9px] font-semibold text-[#858585]">
            For all purchases over $100
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <HiOutlineGift size={30} />
        <div>
          <p className=" text-[#0F0F0F] font-medium">Daily Surprise Offers</p>
          <p className="text-[9px] font-semibold text-[#858585]">
            Save up to 25% off
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <FaHeadset size={25} />
        <div>
          <p className=" text-[#0F0F0F] font-medium">Support 24/7</p>
          <p className="text-[9px] font-semibold text-[#858585]">
            Shop with an expert
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <HiOutlineStar size={30} />
        <div>
          <p className=" text-[#0F0F0F] font-medium">Affordable Prices</p>
          <p className="text-[9px] font-semibold text-[#858585]">
            Get Factory direct price
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <IoCardOutline size={30} />
        <div>
          <p className=" text-[#0F0F0F] font-medium">Secure Payments</p>
          <p className="text-[9px] font-semibold text-[#858585]">
            100% Protected Payments
          </p>
        </div>
      </div>
    </section>
  );
}
