import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function SinglePageInfo(props) {
  const [coin, setCoins] = useState([]);
  const fetchCoins = () => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${props.id}`) //bitcoin
      .then((data) => {
        setCoins(data.data);
      });
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  if (!coin) return <Loader />;
  else if (coin)
    return (
      <div className="text-white flex items-center flex-col mx-7 px-7 w-[50%] text-xl justify-center text-center border-r-2 tracking-wide">
        <img
          className="w-[100px] h-[100px]"
          src={coin.image == undefined ? "No image" : coin.image.small}
          alt="coin-symbol"
        />
        <h1 className="text-3xl font-bold my-4">{coin.name}</h1>
        <p className="mb-4">
          {coin.description == undefined
            ? ""
            : coin.description.en.split(/\. [A-Z0-9]/)[0]}
        </p>
        <div className="font-bold">
          <p>
            Rank: <span>{coin.market_cap_rank}</span>
          </p>
          <p>
            Current Price: $
            {coin.market_data == undefined
              ? "No information"
              : coin.market_data.current_price.usd.toLocaleString()}
          </p>
          <p>
            Market Cap: $
            {coin.market_data == undefined
              ? "No information"
              : coin.market_data.market_cap.usd.toLocaleString()}
          </p>
        </div>
      </div>
    );
}

export default SinglePageInfo;
