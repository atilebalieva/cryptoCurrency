import React from "react";
import Carousel from "./Carousel";
// import 'index.css' from index.css

function Banner() {
  return (
    <div className="banner flex flex-col justify-center text-center uppercase text-white">
      <div className="mb-[50px] mt-[50px]">
        <h2 className="text-3xl font-bold">Crypto Hunt</h2>
        <p className="text-[8px]">
          Get all the information regarding your favorite crypto currency
        </p>
        <p className="text-2xl font-bold mt-[30px]">
          Trending coins on CryptoHunt
        </p>
      </div>

      <Carousel />
    </div>
  );
}

export default Banner;
