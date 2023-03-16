import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function NewsInfo() {
  const [news, setNews] = useState([]);
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "crypto news",
      count: "20",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "c85c54d697msh2d6bc0082e34a71p1fdea7jsn4c08dd282158",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((data) => {
        setNews(data.data.value);
        console.log(data.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!news) return <Loader />;
  return (
    //  <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
    <div className="flex flex-wrap justify-evenly mx-[30px]">
      {news.map((news, index) => {
        return (
          <div
            key={index}
            className="p-3 text-white border-[1px] max-w-[450px] min-h-[320px] border-stone-300 mb-[30px]"
          >
            <a href={news.url}>
              <div className="flex justify-between min-h-[125px]">
                <h3 className="text-yellow-400 uppercase text-justify mr-[10px] font-bold">
                  {news.name}
                </h3>
                <img
                  src={
                    news.image == undefined
                      ? "assets/no-image.png"
                      : news.image.thumbnail.contentUrl
                  }
                  className="object-cover"
                  alt=""
                />
              </div>
              <div className="flex justify-between">
                <div className="flex justify-between my-3">
                  <img
                    src={
                      news.provider[0].image == undefined
                        ? "assets/no-image.png"
                        : news.provider[0].image.thumbnail.contentUrl
                    }
                    className="w-[30px] h-[30px] block"
                    alt=""
                  />
                  <p className="self-center ml-3">{news.provider[0].name} </p>
                </div>

                <span></span>
              </div>
              <p>{news.description}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default NewsInfo;
