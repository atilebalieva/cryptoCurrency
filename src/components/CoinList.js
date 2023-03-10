import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const fetchCoins = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false"
      )
      .then((data) => {
        setCoins(data.data);
      });
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleSearch = (search) => {
    const filteredList = coins.filter((item) => {
      return item.symbol.includes(search) || item.name.includes(search);
    });
    return searchFilter.length < 0
      ? setSearchFilter(coins)
      : setSearchFilter(filteredList);
  };
  const navigate = useNavigate();

  if (!coins.length > 0) return <Loader />;
  return (
    <div className="text-white w-[90%] mx-[auto]">
      <h2 className="text-center text-2xl my-5">
        Cryptocurrency Prices by Market Cap
      </h2>
      <div className="w-full">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for a Crypto Currency"
          className="w-full p-3 bg-[#14161A] mb-5 rounded border border-gray-100
          "
          onInput={(e) => handleSearch(e.target.value)}
        />
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-yellow-400 text-black font-bold h-12">
            <th className="rounded-tl-md">Coin</th>
            <th>Price</th>
            <th>24th Change</th>
            <th className="rounded-tr">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {searchFilter.map((item) => {
            return (
              <tr
                onClick={() => {
                  navigate("coin/" + item.id);
                }}
                className="border-b border-gray-100 text-center hover:bg-slate-800 hover: cursor-pointer"
              >
                <td className="flex ml-4 m-3 text-left">
                  <img
                    src={item.image}
                    alt="coin-symbol"
                    className="w-12
                    h-12 mr-3"
                  />
                  <div>
                    <p className="uppercase">{item.symbol}</p>
                    <p>{item.name}</p>
                  </div>
                </td>
                <td>$ {item.current_price}</td>
                <td>{item.price_change_percentage_24h}</td>
                <td>{item.market_cap}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CoinList;

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false
