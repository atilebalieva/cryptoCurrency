import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="flex items-center uppercase px-10 py-3 font-bold">
        <h1
          className="text-yellow-400 flex-grow text-xl cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Cryptohunt
        </h1>
        <nav>
          <ul className="text-white flex items-center space-x-5 text-sm">
            <li>Coins</li>
            <li>News</li>
            <li>Exchanges</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
