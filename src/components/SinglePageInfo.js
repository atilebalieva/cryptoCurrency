import React from 'react';
import axios from "axios";
import {useEffect,useState} from 'react';
import { useParams } from "react-router-dom";

function SinglePageInfo(props) {
   const [coin, setCoins] = useState([])
   const fetchCoins = () => {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${props.id}`)
        .then((data) => {
         setCoins(data.data);
        });
    };
    useEffect(()=>{
      fetchCoins()
    })
  return (
    <div>
      <h1>{coin.name}</h1>

    </div>
  )
}

export default SinglePageInfo