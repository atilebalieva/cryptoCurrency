import React from "react";

function SelectButton({ label, clickedStyle, onClick }) {
  return (
    <span
      onClick={onClick}
      className={
        clickedStyle
          ? "font-bold border-yellow-400 rounded-md cursor-pointer p-2 font-mons bg-yellow-400 text-black w-24 text-center text-[13px] md:text-[16px]"
          : "border border-yellow-400 rounded-md cursor-pointer p-2 px-2 font-mons w-23 md:w-24 text-center text-white text-[13px] md:text-[16px]"
      }
    >
      {label}
    </span>
  );
}

export default SelectButton;
