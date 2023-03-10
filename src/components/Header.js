import React from "react";

function Header() {
  return (
    <div>
      <header className="flex items-center uppercase px-10 py-3 font-bold">
        <h1 className="text-yellow-400 flex-grow text-xl">Cryptohunt</h1>
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
