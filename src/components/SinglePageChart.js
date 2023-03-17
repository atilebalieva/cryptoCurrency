import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Chart as ChartJS } from "chart.js/auto";
import SelectButton from "./SelectButton";

function SinglePageChart({ id }) {
  const [historicalData, setHistoricalData] = useState();

  useEffect(() => {}, []);

  return <div></div>;
}

export default SinglePageChart;
