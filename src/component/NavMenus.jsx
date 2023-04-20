import { IoAppsSharp, IoChevronDown } from "react-icons/io5";

export default function NavMenus() {
  return (
    <>
      <div
        className=" max-w-full mx-auto text-white bg-[#2E344A] py-3 px-[1rem] md:px-[2rem]  items-center 
    text-[0.6rem] md:text-[0.8rem] lg:flex flex-row gap-6 overflow-y-auto h-full hidden "
      >
        <div className="flex flex-row gap-1 items-center">
          <IoAppsSharp size={20} />
          <p>SHOP CATEGORIES</p>
        </div>
        <hr className="h-7 w-0  bg-gray-200 border-0 md:w-px" />
        <ul className="flex  flex-row  gap-8  max-w-full overflow-y-auto  ">
          <li className=" hover:text-[#ECCF38] cursor-pointer ">HOME</li>
          <li className=" hover:text-[#ECCF38] cursor-pointer ">
            CALL TO ORDER
          </li>
          <li className=" hover:text-[#ECCF38] cursor-pointer ">CONTACT</li>
        </ul>
      </div>
    </>
  );
}
