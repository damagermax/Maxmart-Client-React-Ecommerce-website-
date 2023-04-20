import LanguageBar from "./LanguageBar";
import { IoSearch, IoCartOutline, IoAppsSharp } from "react-icons/io5";
import NavMenus from "./NavMenus";

export default function Navbar() {
  return (
    <>
      <nav className="py-4 bg-[#232738] w-full mx-auto px-[1rem]  md:px-[2rem] text-white flex flex-row  items-center justify-between">
        <div className=" flex items-center gap-2">
          <IoAppsSharp size={18} className="md:hidden" />
          <h1 className="text-xl md:text-2xl  font-medium">Digitic.</h1>
        </div>

        <div className="hidden md:flex flex-row  w-[50%] lg:w-[65%]">
          <input
            type="text"
            placeholder="Search Product Here..."
            className="py-2 text-sm  w-full px-2 rounded-l-md "
          />

          <button className="p-2 bg-[#ECCF38] rounded-r-md text-[#232738] text-xl">
            <IoSearch />
          </button>
        </div>

        <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 items-center">
          <div className="flex flex-col ">
            <p className="text-[9px]  md:text-[11.5px]   ">Sign in</p>
            <p className="text-[11.9px] md:text-[13px] font-bold leading-none ">
              Account
            </p>
          </div>

          <div className="flex flex-col hidden ">
            <p className="text-[9px]  md:text-[11.5px]   ">Favorite</p>
            <p className="text-[11.9px] md:text-[13px] font-bold leading-none ">
              & Wishlist
            </p>
          </div>

          <div className="flex flex-row">
            <IoCartOutline size={25} />
            <p className="text-[#ECCF38]  p-[3px] text-xs md:text-sm ">20</p>
          </div>
        </div>
      </nav>

      <div className="pb-4 bg-[#232738] px-[1rem] md:px-[2rem]  md:hidden">
        <div className=" flex flex-row w-full ">
          <input
            type="text"
            placeholder="Search Product Here..."
            className="py-2 text-sm  w-full px-2 rounded-l-md "
          />

          <button className="p-2 bg-[#ECCF38] rounded-r-md text-[#232738] text-xl">
            <IoSearch />
          </button>
        </div>
      </div>

      <NavMenus />
    </>
  );
}
