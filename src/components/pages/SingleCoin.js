import React, { useState } from "react";
import SinglePageInfo from "../components/SinglePageInfo";
import SinglePageChart from "../components/SinglePageChart";


function SingleCoin() {
  const params = useParams();

  return <div>
    <SinglePageInfo id={params.id} />
    <SinglePageChart />
  </div>;
}

export default SingleCoin;
