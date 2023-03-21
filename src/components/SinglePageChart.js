import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import SelectButton from "./SelectButton";

function SinglePageChart({ id }) {
  const [historicalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(1);
  const chartDays = [
    {
      label: "24 Hours",
      value: 1,
    },
    {
      label: "30 Days",
      value: 30,
    },
    {
      label: "3 Month",
      value: 90,
    },
    {
      label: "1 Year",
      value: 365,
    },
  ];

  useEffect(() => {
    axios
      .get(
        ` https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
      )
      .then((data) => {
        setHistoricalData(data.data.prices);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [days]);

  return (
    <div className="w-[50%]">
      {!historicalData ? (
        <Loader />
      ) : (
        <Line
          className="text-2xl"
          data={{
            labels: historicalData.map((item) => {
              const date = new Date(item[0]);
              let time =
                date.getHours() > 12
                  ? date.getHours() - 12 + ":" + date.getMinutes() + " PM"
                  : date.getHours() + ":" + date.getMinutes() + " AM";
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                data: historicalData.map((item) => {
                  return item[1];
                }),
                label: `Price(Past ${days} Days in USD)`,
                borderColor: "#EEBC1D",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        ></Line>
      )}
      <div className="flex justify-evenly">
        {chartDays.map((day) => {
          return (
            <SelectButton
              label={day.label}
              clickedStyle={day.value === days}
              onClick={() => {
                setDays(day.value);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SinglePageChart;
