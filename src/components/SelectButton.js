import React from "react";

function SelectButton({ label, clickedStyle, onClick }) {
  return (
    <span
      onClick={onClick}
      className={
        clickedStyle
          ? "font-bold border-yellow-400 rounded-md cursor-pointer p-2 font-mons bg-yellow-400 text-black w-24 text-center"
          : "border border-yellow-400 rounded-md cursor-pointer p-2 px-2 font-mons w-24 text-center text-white"
      }
    >
      {label}
    </span>
  );
}

export default SelectButton;
