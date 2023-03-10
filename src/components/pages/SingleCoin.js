import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function SingleCoin() {
  const [coin, setCoin] = useState([]);
  const params = useParams();
  const fetchCoinInfo = () => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/{params}`)
      .then((data) => {
        setCoin(data.data);
      });
  };

  console.log(fetchCoinInfo);

  return <div></div>;
}

export default SingleCoin;
