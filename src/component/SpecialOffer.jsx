import React from "react";
import SpecialCard from "./SpecialCard";

const SpecialOffer = () => {
  return (
    <section className="w-full px-[1rem] md:px-[2rem] mt-12 ">
      <h2 className="text-[1.2rem] sm:text-[1.3rem] lg:text-[1.5rem] font-medium font-roboto">
        Special Offers
      </h2>

      <div className=" grid">
        <SpecialCard />
      </div>
    </section>
  );
};

export default SpecialOffer;
