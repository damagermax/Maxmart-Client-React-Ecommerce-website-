import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-[#2E344A] py-8 text-white  px-[1rem] md:px-[2rem]  w-full grid md:grid-cols-2 items-center border-b border-b-gray-400">
      <div>
        <h2 className="text-[1.2rem] sm:text-[1.3rem] lg:text-[1.5rem] font-medium font-roboto">
          Sign Up For News letter
        </h2>
      </div>

      <div className="w-full flex bg-white items-center rounded-md pr-[6px] py-1 mt-4 md:mt-0">
        <input
          type="email"
          placeholder="Your Email"
          className="py-2 text-sm  w-full  px-4 rounded-l-sm "
        />
        <button className="bg-[#2E344A] py-2 px-4 rounded-md font-roboto  font-medium text-[0.8rem] uppercase tracking-wider">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
