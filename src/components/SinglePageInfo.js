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
      <div className="text-white flex items-center flex-col mx-4">
        <img
          className="w-20 h-20"
          src={coin.image == undefined ? "No image" : coin.image.small}
          alt="coin-symbol"
        />
        <h1>{coin.name}</h1>
        <p className="text-justify">
          {coin.description == undefined
            ? ""
            : coin.description.en.split(/\. [A-Z0-9]/)[0]}
          .shift
        </p>
        <p>
          Rank: <span>{coin.market_cap_rank}</span>
        </p>
        <p>
          Current Price: $
          {coin.market_data == undefined
            ? "No information"
            : coin.market_data.current_price.usd}
        </p>
        <p>
          Market Cap: $
          {coin.market_cap == undefined ? "No information" : coin.market_cap}
        </p>
      </div>
    );
}

export default SinglePageInfo;
