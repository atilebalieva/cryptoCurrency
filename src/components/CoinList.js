import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ReactPaginate from "react-paginate";

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const fetchCoins = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((data) => {
        setCoins(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const filteredCoins = coins.filter((coin) => {
    return (
      coin.symbol.toLowerCase().includes(search.toLowerCase()) ||
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  console.log(filteredCoins);

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
          onInput={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className=" w-full">
          <thead>
            <tr className="bg-yellow-400 text-black font-bold h-12">
              <th className="rounded-tl-md">Coin</th>
              <th>Price</th>
              <th>24th Change</th>
              <th className="rounded-tr">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((item, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => {
                      navigate("/coin/" + item.id);
                    }}
                    className="border-b border-gray-100 text-center hover:bg-slate-800 hover: cursor-pointer"
                  >
                    <td className="flex text-left my-3 mr-3">
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
                    <td>$ {item.current_price.toLocaleString()}</td>
                    <td
                      className={
                        item.price_change_percentage_24h > 0
                          ? "text-green-500 font-bold"
                          : "text-red-500 font-bold"
                      }
                    >
                      {item.price_change_percentage_24h > 0
                        ? `+${item.price_change_percentage_24h.toFixed(2)}`
                        : item.price_change_percentage_24h.toFixed(2)}
                    </td>
                    <td>{item.market_cap.toLocaleString()} M</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        onPageChange={(numOfPage) => setPage(numOfPage.selected + 1)}
        pageCount={coins.length / 10}
        pageClassName="rounded-[50%] hover:bg-neutral-500 w-10 h-10 flex justify-center items-center"
        previousClassName="rounded-[50%] hover:bg-neutral-500 w-10 h-10 flex justify-center items-center"
        nextClassName="rounded-[50%] hover:bg-neutral-500 w-10 h-10 flex justify-center items-center"
        className="text-yellow-400 font-bold flex items-center justify-center space-x-5 mt-10 w-full pb-10"
      />
    </div>
  );
}

export default CoinList;
