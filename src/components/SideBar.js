import React from "react";
import { useNavigate } from "react-router-dom";

function SideBar({ collapsed }) {
  const navigate = useNavigate();
  const sideBarClass =
    "flex flex-col item-center justify-center lg:hidden overflow-x-hidden z-[10000] transition-all duration-[500ms] bg-neutral-900 bg-opacity-95 border-b border-yellow-400 absolute w-full top-0 right-0 h-full mt-[60px]";
  return (
    <div className={!collapsed ? sideBarClass : sideBarClass + "w-0"}>
      <ul className="mt-[-299px] font-mons text-lg flex flex-col space-y-3 items-center font-bold py-5 text-white">
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          Coin
        </li>
        <li
          onClick={() => {
            navigate("/news");
          }}
        >
          News
        </li>
        <li>Exchange</li>
      </ul>
    </div>
  );
}

export default SideBar;
