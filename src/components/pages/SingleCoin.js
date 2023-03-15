import React from "react";
import { useParams } from "react-router-dom";
// import SinglePageChart from "../SinglePageChart";
import SinglePageInfo from "../SinglePageInfo";

function SingleCoin() {
  const params = useParams();

  return (
    <div>
      <SinglePageInfo id={params.id} />
    </div>
  );
}

export default SingleCoin;
