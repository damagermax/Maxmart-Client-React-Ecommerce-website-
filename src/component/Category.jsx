export default function Category(props) {
  return (
    <div className="flex  sm:flex  gap-4 items-center sm:justify-between text-[0.75rem] font-medium bg-white py-6 px-2">
      <div className=" order-2 sm:order-1">
        <p>{props.name}</p>
        <p className="text-[0.72rem] text-[#A0A1A8]">{props.itemsCount}</p>
      </div>
      <img
        src={props.img}
        alt=""
        className="w-[90px] px-1 order-1 sm:order-2  object-contain h-[90px]  "
      />
    </div>
  );
}
