import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="flex items-center uppercase px-10 py-5 font-bold shadow-2xl">
        <h1
          className="text-yellow-400 flex-grow text-[30px] text-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Cryptohunt
        </h1>
        <nav>
          <ul className="text-white flex items-center space-x-5 text-sm">
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Coins
            </li>
            <li
              onClick={() => {
                navigate("/news");
              }}
            >
              News
            </li>
            <li>Exchanges</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
