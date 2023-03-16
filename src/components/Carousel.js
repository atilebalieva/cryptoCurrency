import React, { useEffect, useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";

function Carousel() {
  const [trendCoins, setTrendCoins] = useState([]);
  const fetchTrandingCoins = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=13&page=1&sparkline=false"
      )
      .then((data) => {
        setTrendCoins(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTrandingCoins();
  }, []);

  const roundedNumber = (num) => {
    return Math.round(num * 100) / 100;
  };

  function colorOfPriceChanges(price) {
    return price > 0 ? "text-green-600" : "text-red-600";
  }

  const items = trendCoins
    ? trendCoins.map((items) => {
        return (
          <div className="flex items-center flex-col mt-5">
            <img
              src={items.image}
              alt="coin-symbol"
              className="w-28 h-30 hmb-4"
            />
            <div>
              <p>
                <span>{items.symbol} </span>
                <span
                  className={
                    roundedNumber(items.price_change_percentage_24h) > 0
                      ? "text-green-500 font-bold"
                      : "text-red-500 font-bold"
                  }
                >
                  {items.price_change_percentage_24h > 0
                    ? `+${roundedNumber(items.price_change_percentage_24h)}`
                    : roundedNumber(items.price_change_percentage_24h)}
                  %
                </span>
              </p>
              <p>${roundedNumber(items.current_price)}</p>
            </div>
          </div>
        );
      })
    : null;

  const responsive = {
    0: { items: 2 },
    512: { items: 4 },
  };

  return (
    <div className="items-center">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
}

export default Carousel;
