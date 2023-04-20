import { IoChevronDown } from "react-icons/io5";

export default function LanguageBar() {
  const languages = [
    "Mandarin",
    "Spanish ",
    "Russian",
    "French",
    "Arabic ",
    "Hindi ",
  ];
  return (
    <div className="hidden  w-full mx-auto text-white bg-[#232738] px-[2rem]  py-3 text-[10px] md:flex flex-row justify-between border-b border-b-gray-600">
      <p className=" ">{"Hotline:(+233) 54 219 9160"}</p>
      <div className="flex flex-row items-center gap-1 relative">
        <p>English</p>
        <IoChevronDown size="13px" />
      </div>
    </div>
  );
}
