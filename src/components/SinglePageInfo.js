import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function SinglePageInfo(props) {
  const [coin, setCoins] = useState([]);
  const fetchCoins = () => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${props.id}`)
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
      <div className="text-white flex items-center flex-col">
        {/* <p>{console.log(coin)}</p> */}
        <img className="w-20 h-20" src={coin.image} alt="coin-symbol" />
        <h1>{coin.name}</h1>
        {/* <p>{coin.description.en.slice(0)}</p> */}
        <p>
          Rank: <span>{coin.market_cap_rank}</span>
        </p>
        {/* <p>Current Price: ${coin.market_data.current_price.usd}</p>
        <p>Market Cap: ${coin.market_cap}</p> */}
      </div>
    );
}

export default SinglePageInfo;
